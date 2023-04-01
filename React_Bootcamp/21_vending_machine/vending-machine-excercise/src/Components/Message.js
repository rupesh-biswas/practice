import React from 'react'
import "./Message.css";

function Message(props) {
    return (
        <div className='Message'>{props.children}</div>
    )
}

export default Message