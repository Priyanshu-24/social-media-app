import React from "react";

function ShowComment({username, comment_value}) {
    return (
        <div className="show-comment">
            <div><strong>{username}</strong> {comment_value}</div>
        </div>
    )
}

export default ShowComment;
