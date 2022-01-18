import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderChats from "../../components/Headers/HeaderChats";
import Button from "../../components/Button/Button";
import userIcon from '../../img/bxs-user.png'
import chatIcon from '../../img/bxs-message-rounded-dots.png';
import plusIcon from "../../img/plus-circle-regular-24.png";
import store from "../../services/store/store";
import ChatList from "../../components/ChatList/ChatList";
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import { AddShowModal } from "../../services/actions/addShowModal/AddShowModal";
import MesageCard from "../../components/MesageCard/MesageCard";

const ChatPage = () => {
    const [ChatId, setChatId] = useState([]);
    const [Show, setShow] = useState(false);
    const [DropDown, setDropDown] = useState(false)
    
    const OpenOrClose = () => {
        setDropDown(!DropDown);
    }
    store.subscribe(()=>{
        setChatId(store.getState().idChat);
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
            <div>
            {/* <Button ><img src={plusIcon} alt='Plus Icon' ></img></Button> */}
            <Dropdown
                direction="up"
                isOpen={DropDown}
                toggle={OpenOrClose}
            >
                <DropdownToggle caret className="">
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
            ?<MesageCard/>
            : <p>esto seria una imagen</p>
            }
        </main>
        </>
    )
};

export default ChatPage