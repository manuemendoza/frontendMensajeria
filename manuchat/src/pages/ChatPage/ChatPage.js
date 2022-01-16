import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderChats from "../../components/Headers/HeaderChats";
import Button from "../../components/Button/Button";
import userIcon from '../../img/bxs-user.png'
import chatIcon from '../../img/bxs-message-rounded-dots.png';
import plusIcon from "../../img/plus-circle-regular-24.png";
import { AddShowModal } from "../../services/actions/addShowModal/AddShowModal";
import store from "../../services/store/store";
import ChatList from "../../components/ChatList/ChatList";

const ChatPage = () => {
    // const [IdContact, setIdContact] = useState([]);
    const [Show, setShow] = useState(false);
    
    const handleModal = (e) => {
        e.preventDefault()
        store.dispatch(AddShowModal(true));
    };

    store.subscribe(()=>{
        // setIdContact(store.getState().idContact);
        setShow(store.getState().showCard);
    });

    return(
        <>
        <header className="header_prueba">
            <HeaderChats/>
        </header>
        <aside className="aside_prueba">
            <Link to="/users">
                <img src={userIcon} alt='User Icon'/>
            </Link>
            <Link to="#">
                <img src={chatIcon} alt='Chat Icon'/>
            </Link>
            <ChatList/>
            <Button onClick={(e) => handleModal(e)} ><img src={plusIcon} alt='Plus Icon' ></img></Button>
        </aside>
        <main>
            {Show
            ? <p>esto seria el chat</p>
            : <p>esto seria una imagen</p>
            }
        </main>
        </>
    )
};

export default ChatPage