import { useEffect, useState } from "react";
import { ApiUser } from "../../services/API/ApiUser";
import store from "../../services/store/store";
import { AddDeleteContact } from '../../services/actions/addDeleteContact/AddDeleteContact';
import { AddIdChat } from '../../services/actions/addIdChat/AddIdChat';
import Button from "../Button/Button";
import { ApiChat } from "../../services/API/ApiChat";
import { ApiMessage } from "../../services/API/ApiMessage";
import { useNavigate } from 'react-router';
import "./UserCar.scss"
import { AddNewChat } from "../../services/actions/addNewChat/AddNewChat";



const UserCard = (props) => {
    const { contact } = props;
    const [Card, setCard] = useState([]);
    const id = contact.id;
    const navigate = useNavigate();

    const redirectionToChat = () => {
        navigate("/chats");
    };
    const getUser = async (id) =>{
        try {
            const res = await ApiUser.getUser(id);
            setCard(res);
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error);
        }
    };

    const handleCreateChat = async (e) => {
        e.preventDefault();
        const title = null
        const userIds = [id];
        try {
            const resChat = await ApiChat.createChat(title, userIds);
            const id = resChat._id
            store.dispatch(AddIdChat(id));
            console.log('esto es el chart ', resChat);
            if (resChat._id) {
                    redirectionToChat();
                    store.dispatch(AddNewChat(true));
            }
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error);
        }
    };

    const handleModalDelete = (e) =>{
        e.preventDefault();
        store.dispatch(AddDeleteContact(true));
    }

    useEffect(() => {
        getUser(id);
    },[id]);

    return(
        <div className="container">
            <h1 className="card_title">Perfil del Contacto</h1>
            <h5 className="text nickname">NickName: <span>{Card.username}</span></h5>
            <p className="text">Nombre: {Card.name} Apellido: {Card.surname}</p>
            <p className="text">Email: {Card.email}</p>
            <div className="container_button">
                <Button className="btn btn-info button" onClick={(e) => handleCreateChat(e)} >Iniciar Conversacion</Button>
                <Button className="btn btn-danger button" onClick={(e) => handleModalDelete(e)} >Borrar Contacto</Button>
            </div>
        </div>
    )
};

export default UserCard;