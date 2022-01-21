import "./MessageSession.scss" 
import store from "../../services/store/store";
import { useEffect, useState } from "react";
import { ApiMessage } from "../../services/API/ApiMessage";
import MessageNotification from "../MessageNotification/MessageNotification";


const MessageSession =  (props) => {
    const { chat } = props;
    const [NewMessage, setNewMessage] = useState(false);
    const [AllMessage, setAlMessage] = useState([]);
    const id = chat.id

    const handleGetChat = async (id) => {
        try {
            const allMessages = await ApiMessage.getAllMessages(id);
            setAlMessage(allMessages);
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
        handleGetChat(id);
        const interval = setInterval(() => {
            handleGetChat(id);
        },4500);
        return () => clearInterval(interval);
    },[NewMessage, id]);


    return(
        <>
        <div className="scroll">
            {AllMessage.map( message => <MessageNotification
                key={message._id}
                message={message}
            />)
            }
        </div>
        </>
    )
}

export default MessageSession;