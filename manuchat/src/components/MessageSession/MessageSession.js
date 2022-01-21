
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
    const [IdMessage, setIdMessage] = useState(null);
    const [ScrollTo, setScrollTo] = useState(false);
    const id = chat.id;
    const scrollElementId = '.messageCard_messageSession';
    
    console.log('el seteo de storagage ', IdMessage);

    const scrollTo = (scroll) => {
        if (scroll) {
            let scrollElement = $(scrollElementId),
                top = scrollElement[0].getBoundingClientRect().top,
                height = scrollElement.prop("offsetHeight"),
                scrollTop;

            if (typeof scroll === "string") {
                console.log('funciona');
                const messageElement = $('div[data-messageid="' + scroll + '"]');
                scrollTop = messageElement.prop("offsetTop") - top - height / 2;
            } else {
                scrollTop = scrollElement.prop("scrollHeight");
            }

            console.log('scroll', scroll, scrollTop);

            scrollElement.animate({
                scrollTop: scrollTop
            }, 1000);
        }
    };
    
    if (IdMessage !== null) {
        scrollTo(IdMessage.id);
    } else { 
        scrollTo(ScrollTo);
    }

    
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
        setIdMessage(store.getState().idMessage);
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