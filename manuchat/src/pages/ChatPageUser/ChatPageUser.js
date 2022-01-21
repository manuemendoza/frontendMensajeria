import HeaderChats from "../../components/Headers/HeaderChats";
import "./ChatPageUser.scss"
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
import { AddNewChat } from "../../services/actions/addNewChat/AddNewChat";

const ChatPageUser = () => {
    const token = localStorage.getItem('token');
    const [ContactId, setContactId] = useState([]);
    const [Show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleModal = () => {
        store.dispatch(AddShowModal(true));
    };
    
    const handleToChats = (e) => {
        store.dispatch(AddNewChat(false));
    }

    store.subscribe(()=>{
        setContactId(store.getState().idContact);
        setShow(store.getState().showCard);
    });

    const redirectionToLogin = () =>{
        navigate("/login")
    };
    //@TODO ESTO LO TENGO QUE PASAR A TODOS LOS ENDPOINT Y CAUNDO DE UN 401 BORRE EL TOKEN probar tambien cuando el token es []
    useEffect(()=>{ 
        const token = localStorage.getItem('token');
        if (!token) {
            redirectionToLogin();
        }

    },);
    
    return(
        <>
        <header className="chatHeader">
            <HeaderChats/>
        </header>
        <div className="body_container">
            <aside className="">
                <div className="aside_container-link">
                    <div className="aside_link">
                        <Link to="#" ><img src={userIcon} alt='User Icon' className="aside_img"/></Link>
                    </div>
                    <div className="aside_link">
                        <Link to="/chats" onClick={() => handleToChats()} ><img src={chatIcon} alt='Chat Icon'/></Link>
                    </div>
                </div>
                <h2 className="aside_text"> # Lista de Contacto</h2>
                <UserList/>
                <div className="aside_container-button">
                    <Button onClick={(e) => handleModal(e)} className="aside_button" ><img src={plusIcon} alt='Plus Icon' className="aside_button-img"></img></Button>
                </div>
            </aside>
            <main>
                {Show
                ? <UserCard
                className="main_card"
                contact={ContactId}/>
                : <div className="fondo_vacio ">
                    <p className="main_text">Pincha en uno de tus contactos</p>
                </div>
                } 
                <CreateContact/>
                <DeleteContact/>
            </main>
        </div>
        </>
    )
};

export default ChatPageUser;