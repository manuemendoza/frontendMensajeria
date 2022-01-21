import { useState } from "react";
import "./MessageNotificaton.scss"

const MessageNotification = (props) => {
    const { message } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    const [ContactName, setContactName] = useState();
    const contactId=  message.userId._id;
    let text = message.text;
    let name = '';
    let id = message._id;
    let ownMessage = user.id === contactId;

    if (message.text) {
        if (user.id === contactId) {
            name = user.name;
        } else {
            name = message.userId.name;

        }
    }

    return(
        <div >
            {!ContactName
            ?<div className={`chat_bubble ${ownMessage ? "own-message" : ""} `} data-messageid={id}>
                <h5 className="chat_bubble-title">{name}</h5>
                <p className="chat_bubble-text">{text}</p>
            </div>
            :<div></div>}
        </div>
    )
};

export default MessageNotification;