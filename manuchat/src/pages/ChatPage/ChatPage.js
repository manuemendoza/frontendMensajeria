import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import HeaderChats from "../../components/Headers/HeaderChats";
import userIcon from '../../img/bxs-user.png'
import chatIcon from '../../img/bxs-message-rounded-dots.png';
import plusIcon from "../../img/plus-circle-regular-24.png";
import store from "../../services/store/store";
import ChatList from "../../components/ChatList/ChatList";
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import { AddNewContact } from "../../services/actions/addNewContact/AddNewContact";
import { AddShowCard } from "../../services/actions/addShowCard/AddShowCard"
import MesageCard from "../../components/MesageCard/MesageCard";

const ChatPage = () => {
    const token = localStorage.getItem('token');
    const [ChatId, setChatId] = useState([]);
    const [Show, setShow] = useState(false);
    const [DropDown, setDropDown] = useState(false);
    const navigate = useNavigate();

    const handleToChats = (e) => {
        store.dispatch(AddNewContact(false));
        store.dispatch(AddShowCard(false));
    }

    const OpenOrClose = () => {
        setDropDown(!DropDown);
    }
    store.subscribe(()=>{
        setChatId(store.getState().idChat);
        setShow(store.getState().showCard);
    });
    
    const redirectionToLogin = () =>{
        navigate("/login")
    };

    useEffect(()=>{       
        if (!token) {
            redirectionToLogin();
        }
    },[]);

    return(
        <>
        <header className="header_prueba">
            <HeaderChats/>
        </header>
        <div className="body_container">
            <aside className="aside_prueba">
                <div className="aside_container-link">
                    <div className="aside_link">
                        <Link to="/users" onClick={() => handleToChats()}><img src={userIcon} alt='User Icon'/></Link>
                    </div>
                    <div className="aside_link">
                        <Link to="#"><img src={chatIcon} alt='Chat Icon'/></Link>
                    </div>
                </div>
                <h2 className="aside_text"> # Lista de Chats</h2>
                <ChatList/> 
                <div>
                <Dropdown
                    direction="up"
                    isOpen={DropDown}
                    toggle={OpenOrClose}
                    className="aside_container-button"
                >
                    <DropdownToggle className="aside_button">
                        <img src={plusIcon} alt='Plus Icon' ></img>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem disabled>
                            Enviar un Mensaje privado (Deshabilitado)
                        </DropdownItem>
                        <DropdownItem disabled>
                            crear un grupo (Deshabilitado)
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </div>
            </aside>
            <main>
                {Show
                ?<MesageCard
                chat={ChatId}
                />
                : <div className="fondo_vacio">
                    <p className="main_text">Pincha en uno de tus chat</p>
                </div>
                }
            </main>
        </div>
        
        </>
    )
};

export default ChatPage