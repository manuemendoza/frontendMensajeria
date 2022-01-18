import { useEffect, useState } from "react";
import { AddNewChat } from "../../services/actions/addNewChat/AddNewChat";
import { ApiChat } from "../../services/API/ApiChat";
import store from "../../services/store/store";


const ChatList = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const title = null;
    // const [Chats, setChats] = useState([]);
    const [NewChats, setNewChats] = useState(false);
    console.log(NewChats);
    const handleGetChat = async (e) => {
        e.preventDefault();
        console.log('se hace la llamada');
        try {
            let res = await ApiChat.getChat(title);
            console.log('patito de goma ', res);
            // setChats(res.contacts);
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
        console.log('se hace ');
        handleGetChat(title);
        store.dispatch(AddNewChat(false));
    },[]);
    return(
        <div>
            <p>estamos probando esto </p>
            {/* {Contacts.map(contact => <UserListItem
                key={contact._id}
                contact={contact}
                />)} */}
        </div>
    )
};

export default ChatList;