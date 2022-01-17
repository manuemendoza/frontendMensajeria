import "./prueba.scss";
import HeaderChats from "../../components/Headers/HeaderChats";
import UserList from "../../components/UserList/UserList";
import UserCard from "../../components/UserCard/UserCard";
import userIcon from '../../img/bxs-user.png';
import plusIcon from "../../img/plus-circle-regular-24.png";
import chatIcon from '../../img/bxs-message-rounded-dots.png';
import store from '../../services/store/store';
import { AddShowModal } from "../../services/actions/addShowModal/AddShowModal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import Button from "../../components/Button/Button";
import 'bootstrap/dist/css/bootstrap.css';
import CreateContact from "../../components/CreateContact/CreateContact";
import DeleteContact from "../../components/DeleteContact/DeleteContact";

const ChatPageUser = () => {
    const token = localStorage.getItem('token');
    const [IdContact, setIdContact] = useState([]);
    const [Show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleModal = (e) => {
        e.preventDefault()
        store.dispatch(AddShowModal(true));
    };

    store.subscribe(()=>{
        setIdContact(store.getState().idContact);
        setShow(store.getState().showCard);
    });
    const redirectionToLogin = () =>{
        navigate("/login")
    }
    //@TODO ESTO LO TENGO QUE PASAR A TODOS LOS ENDPOINT Y CAUNDO DE UN 401 BORRE EL TOKEN probar tambien cuando el token es []
    useEffect(()=>{       
        if (!token) {
            redirectionToLogin();
        }
    },[token]);
    
    return(
        <>
        <header className="header_prueba">
            <HeaderChats/>
        </header>
        <aside className="aside_prueba">
            <Link to="#"><img src={userIcon} alt='User Icon'/></Link>
            <Link to="/chats"><img src={chatIcon} alt='Chat Icon'/></Link>
            <UserList/>
            <Button onClick={(e) => handleModal(e)} ><img src={plusIcon} alt='Plus Icon' ></img></Button>
        </aside>
        <main className="main_prueba">
            {Show
            ? <UserCard
            className="main_prueba--contenido"
            contact={IdContact}/>
            : <p>Esto tien que se una imagen</p>
            } 
            <CreateContact/>
            <DeleteContact/>
        </main>
        </>
    )
};

export default ChatPageUser;