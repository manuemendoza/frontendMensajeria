import { useState, useEffect } from "react";
import store from "../../services/store/store";
import { AddNewMessage } from "../../services/actions/addNewMessage/AddNewMessage";
import { ApiMessage } from "../../services/API/ApiMessage";
import { ApiChat } from "../../services/API/ApiChat";
import { ApiUser } from "../../services/API/ApiUser";
import MessageSession from "../MessageSession/MessageSession";
import "./MessgaCard.scss";
import send from "../../img/send.png";

const MesageCard = (props) => {
    const { chat } = props
    const user = JSON.parse(localStorage.getItem('user'));
    const [NewMessage, setNewMessage] = useState(false);
    const [ContactName, setContactName] = useState();
    let id = chat.id;
    const handleCreateMessage = async (e) => {
        e.preventDefault();
        let text = e.target.text.value;
        let chatId = chat.id
        setNewMessage(!NewMessage);
        try {
            const res = await ApiMessage.createMessage(text, chatId);
            if (res) {
                e.target.text.value = '';
                store.dispatch(AddNewMessage(NewMessage));
            }
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error.status);
        }
    };

    const handleGetUser = async (id) => {
        try {
            let chat = await ApiChat.getChat(id);
            
            if (chat.userIds[0]._id !== user.id ) {
                let res = await ApiUser.getUser(chat.userIds[0]._id);
                setContactName(res.name);
            }else{
                let res = await ApiUser.getUser(chat.adminId);
                setContactName(res.name);
            }          
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error.message);
        }
    };
    
    useEffect(() => {
        handleGetUser(id);
    },[id]);

    return(
        <div className="messageCard_container">
            <div className="messageCard_header">
                <h2 className="header-text">{ContactName}</h2>
            </div>
            <div className="container messageCard_messageSession">
                <MessageSession
                chat={chat}
                />
            </div>
            <form onSubmit={(e) => handleCreateMessage(e)} className="messageCar_form">
                <label className="form_label">
                    <input
                        type='text'
                        name='text'
                        required
                        className="form_text"
                    />
                </label>
                <button type="submit" className="form_button"><img src={send} alt='Plus Icon' className="form_button form_img"></img></button>
            </form>
        </div>
    )
};

export default MesageCard;