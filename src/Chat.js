import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import './Chat.css'
import { Link } from 'react-router-dom'

function Chat({name, message, time, picture}) {
    return (
        <Link to={`/chat/${name}`}>
    <div className="Chat">
            <Avatar className="Chat_image" alt={name} src={picture}/> 
                 <div className="Chat_message">
                     <h2>{name}</h2>
                     <p>{message}</p>
                </div>
                <div className="Chat_time">
                    <p>{time}</p>
                </div>
    </div>
    </Link>
    );
}

export default Chat
