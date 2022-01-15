import "./prueba.scss";
import HeaderChats from "../../components/Headers/HeaderChats";
import UserList from "../../components/UserList/UserList";
import UserCard from "../../components/UserCard/UserCard";
import userIcon from '../../img/bxs-user.png';
import plusIcon from "../../img/plus-circle-regular-24.png";
import chatIcon from '../../img/bxs-message-rounded-dots.png';
import store from '../../services/store/store';
import { AddVisibility } from "../../services/actions/addVisibility/AddVisibility";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import 'bootstrap/dist/css/bootstrap.css';
import CreateContact from "../../components/CreateContact/CreateContact";

const ChatPageUser = () => {
    const [Card, setCard] = useState([])
    const [Show, setShow] = useState(false);
    
    const handleModal = (e) => {
        e.preventDefault()
        store.dispatch(AddVisibility(false));
    };

    useEffect(() => {
        store.subscribe(()=>{
            setCard(store.getState().user);
            setShow(store.getState().visibility);
        });
    }, []);
    return(
        <>
        <header className="header_prueba">
            <HeaderChats/>
        </header>
        <aside className="aside_prueba">
            <Link to="/user"><img src={userIcon} alt='User Icon'/></Link>
            <Link to="/user/chat"><img src={chatIcon} alt='Chat Icon'/></Link>
            <UserList/>
            <Button onClick={(e) => handleModal(e)} ><img src={plusIcon} alt='Plus Icon' ></img></Button>
        </aside>
        <main className="main_prueba">
            {Show
            ? <UserCard
            className="main_prueba--contenido"
            contact={Card}/>
            : <p>Esto tien que se una imagen</p>
            }
            <CreateContact/>
        </main>
        </>
    )
};

export default ChatPageUser;