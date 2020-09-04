import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar"
import './Chatscreen.css'

function Chatscreen() {
    const [input , setInput] = useState([

    ])
    const [message, setMessages] = useState([
        {
            name:"Sasha",
            message:"Hey!",
            image:"https://img.ohmymag.com/s3/fromm/1024/insolite/default_2019-12-11_94210735-a354-41c2-a307-d756896c426b.jpeg",
        },
        {
            name:"Sasha",
            message:"Comment va tu !",
            image:"https://img.ohmymag.com/s3/fromm/1024/insolite/default_2019-12-11_94210735-a354-41c2-a307-d756896c426b.jpeg",
        },   
    ])
    const handleSend = e =>{
        e.preventDefault();
        setMessages([...message,{message:input}]);
        setInput();
    }

    return (
        <div className="Chatscreen">
            <p className="Chatsmatched">You matched with Sasha</p>
            {message.map(message =>(
                message.name ? (
                    <div className="Chatscreen_message">
                    <Avatar className="Chatscreen_avatar" 
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="Chatscreen_texte">{message.message}</p>
                     </div>
                ) : (
                    <div className="Chatscreen_message">
                        <p className="Chatscreen_textUser">{message.message}</p>
                    </div> 
                )
            ))}
            <form className="Chatscreen_inputscreen">
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="Chatscreen_input"
                    placeholder="Type ur message when u are rdy ! "
                    type="text"/>
                        <button onClick={handleSend} type="submit" className="Chatscreen_inputbutton">SEND</button>
            </form>
        </div>
    )
}

export default Chatscreen
