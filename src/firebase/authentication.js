import { auth, google_provider } from "./firebase";

export const signInGoogle = async () => {

    let user;

    await auth.signInWithPopup(google_provider)
    .then((res) => {
        user = res.user;
    })
    .catch((err) => {
        console.log(err.message);
    });

    return user;
}


export const logout = async () => {

    let logout_success;

    await auth.signOut()
    .then(() => {
        logout_success = true;
    }).catch((err) => {
        console.log(err.message);
    });

    return logout_success;
}