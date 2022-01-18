import { useEffect, useState } from "react";
import { AddNewChat } from "../../services/actions/addNewChat/AddNewChat";
import { ApiChat } from "../../services/API/ApiChat";
import store from "../../services/store/store";
import ChatListItem from "../ChatListItem/ChatListItem";


const ChatList = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const title = null;
    const [Chats, setChats] = useState([]);
    const [NewChats, setNewChats] = useState(false);
    const handleGetChat = async (e) => {
        try {
            let res = await ApiChat.getChats(title);
            setChats(res.chats);
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error.message);
        }
    };

    store.subscribe(() => {
        setNewChats(store.getState().newChat)
    });

    useEffect(() => {
        handleGetChat(title);
        store.dispatch(AddNewChat(false));
    },[]);
    return(
        <div>
            <p>CHAT</p>
            {Chats.map(chat => <ChatListItem
                key={chat._id}
                chat={chat}
                />)}
        </div>
    )
};

export default ChatList;

