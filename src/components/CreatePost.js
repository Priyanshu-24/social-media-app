import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import make_random_name from "../helper/random_no";
import { db, storage } from "../firebase/firebase";
import firebase from "firebase";

function CreatePost() {

  const [user, setUser] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const imageSelect = (e) => {

    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      let imageURL = URL.createObjectURL(e.target.files[0]);

      let image_grab = document.getElementById("show_image");
      image_grab.src = imageURL;
      image_grab.style.display = "block";

    }
  };

  const uploadPost = () => {

    if (image) {
      let image_name = make_random_name(12);

      const upload_image = storage.ref(`images/${image_name}.jpg`).put(image);

      upload_image.on(
        "state_changed",
        (e) => {
          const check_progress = Math.round(
            (e.bytesTransferred / e.totalBytes) * 100
          );
          setProgress(check_progress);
        },

        (err) => {
          console.log(err);
        },
        
        () => {
          storage
            .ref("images")
            .child(`${image_name}.jpg`)
            .getDownloadURL()
            .then((image_url) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                photoURL: image_url,
                username: user.email.replace("@gmail.com", ""),
                userPhoto: user.photoURL,
              });
            });

            setCaption("");
            setProgress(0);
            setImage(null);

            document.getElementById("show_image").style.display = "none";

        }
      );
    }
  };

  return (
    <div>
      {user ? (
        <div className = "upload_post">

          <div className = "upload_post_heading">Post Image</div>
          <textarea
            rows="3"
            value={caption}
            placeholder="Enter Caption"
            onChange={(e) => setCaption(e.target.value)}
          ></textarea>
          <div>
              <img id = "show_image" alt = "show_image" />
          </div>
          <div>
            <label htmlFor="input_image" className="label_inp_image">
              <LinkedCameraIcon />
            </label>
            <input
              id="input_image"
              type="file"
              accept="image/*"
              onChange={imageSelect}
            />
          </div>
          <button onClick = {uploadPost}>Post</button>
          {progress !== 0 ? <div>{progress}% uploaded</div> : null}

        </div>
      ) : (
        <div className="please-login-text">Please Login to create post</div>
      )}
    </div>
  );
}

export default CreatePost;
