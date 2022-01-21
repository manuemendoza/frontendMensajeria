
import { useEffect, useState } from "react";
import $ from "jquery";

import "./MessageSession.scss" 
import store from "../../services/store/store";
import { ApiMessage } from "../../services/API/ApiMessage";
import MessageNotification from "../MessageNotification/MessageNotification";

const MessageSession =  (props) => {

    const { chat } = props;
    const [NewMessage, setNewMessage] = useState(false);
    const [Messages, setMessages] = useState([]);
    const [ScrollTo, setScrollTo] = useState(false);
    const id = chat.id;
    const scrollElementId = '#scrollable-list';

    const scrollTo = (scroll) => {
        console.log('scroll', scroll);
        if (scroll) {
            let scrollElement = $(scrollElementId),
                scrollTop;

            if (typeof scroll === "string") {
                const messageElement = $('data-message["' + scroll + '"]');
                scrollTop = messageElement.offsetTop;
            } else {
                scrollTop = scrollElement.prop("scrollHeight");
            }

            scrollElement.animate({
                scrollTop: scrollTop
            }, 1000);
        }
    };    

    scrollTo(ScrollTo);
    
    const handleGetChat = async (id, messages) => {
        try {
            const newMessages = await ApiMessage.getAllMessages(id),
                hasNewMessages = newMessages.length !== messages.length;

            if (hasNewMessages) {
                setMessages(newMessages);
            }
            setScrollTo(hasNewMessages);
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error.message);
        }
    };

    store.subscribe(()=>{
        setNewMessage(store.getState().newMessage);
    });
    
    useEffect(() => {
        console.log('message session', 'USE EFFECT');
        handleGetChat(id, Messages);
        const interval = setInterval(() => {
            handleGetChat(id, Messages);
        },4500);
        return () => clearInterval(interval);
    },[NewMessage, id, Messages]);


    return(
        <>
        <div id="scrollable-list" className="scroll">
            {Messages.map( message => <MessageNotification
                key={message._id}
                message={message}
            />)
            }
        </div>
        </>
    )
}

export default MessageSession;