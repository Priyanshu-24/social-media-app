import React from "react";

function ShowComment({username, comment_value}) {
    return (
        <div>
            <div><strong>{username}</strong> {comment_value}</div>
        </div>
    )
}

export default ShowComment;
