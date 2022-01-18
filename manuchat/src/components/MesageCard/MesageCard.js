import { useEffect, useState } from "react";
import { ApiUser } from "../../services/API/ApiUser";
import store from "../../services/store/store";
import { AddDeleteContact } from '../../services/actions/addDeleteContact/AddDeleteContact';
import Button from "../Button/Button";
import { ApiChat } from "../../services/API/ApiChat";
import { ApiMessage } from "../../services/API/ApiMessage";
import { useNavigate } from 'react-router';

const MesageCard = () => {
    // const { chat } = props;
    // const user = JSON.parse(localStorage.getItem('user'));
    // const [Card, setCard] = useState([]);
    // const id = contact.id;
    // const navigate = useNavigate();

    // const redirectionToChat = () => {
    //     navigate("/chats");
    // };
    // const getUser = async (id) =>{
    //     try {
    //         const res = await ApiUser.getUser(id);
    //         setCard(res);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleCreateMessage = async (e) => {
        e.preventDefault();
        let text = e.target.text.value;
        console.log(text);
        if (text) {
            e.target.text.value = '';
        }

        // const title = null;
        // const userIds = [id];
        // const text = null;
        // try {
        //     const resChat = await ApiChat.createChat(title, userIds);
        //     console.log('esto es el chart ', resChat);
        //     if (resChat._id) {
        //         const resMessage = await ApiMessage.createMessage(text, resChat._id);
        //         console.log('este es mensaje ', resMessage);
        //         if (resMessage) {
        //             redirectionToChat();
        //         }
        //     }
        // } catch (error) {
        //     if (error.status === 401) {
        //         localStorage.setItem('token', []);
        //     }
        //     console.error(error);
        // }
    };

    const handleModalDelete = (e) =>{
        // e.preventDefault();
        // store.dispatch(AddDeleteContact(true));
    }

    // useEffect(() => {
    //     getUser(id);
    // },[id]);

    return(
        <div>
            <div>
                <p>aqui van a ir los mensajes</p>
            </div>
            <form onSubmit={(e) => handleCreateMessage(e)}>
                <div>
                    <label>
                        <input
                            type='text'
                            name='text'
                            required
                        />
                    </label>
                </div>
                <input type="submit" value="enviar"/>
            </form>
        </div>
        // <div className="main_prueba--contenido">
        //     
        //     <form> 
        //         <div>
        //             <div>
        //                 <label>
        //                     <input
        //                         type='text'
        //                         name='text'
        //                         required
        //                     />
        //                 </label>
        //             </div>
        //         </div>
        //         
        //     </form>
        // </div>
    )
};

export default MesageCard;