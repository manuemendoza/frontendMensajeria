import './HeaderChats.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import imagenLogo from '../../img/logodelado.png';
import Logout from "../Logout/Logout";
import Search from "../Search/Search";
import UpdateUser from "../Updates/UpdateUser";
import { useState } from "react";
import { ApiMessage } from "../../services/API/ApiMessage";
import store from '../../services/store/store';
import { AddShowModalUpDate } from "../../services/actions/addShowModalUpDate/AddShowModalUpDate"
import SearchList from '../SearchList/SearchList';

const HeaderChats = (props) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userName = user.name.split('');
    const userSurname = user.surname.split('');
    const [DropDown, setDropDown] = useState(false);
    const [AllMessage, setAllMessages] = useState();
    const [Text, setText] = useState(false);
    
    const OpenOrClose = () => {
        setDropDown(!DropDown);
    };

    const handledShowProfile = (e) => {
        e.preventDefault();
        store.dispatch(AddShowModalUpDate(true))
    };
    
    const handleGetChat = async (text) => {
        let chatId = false;
        try {
            const allMessages = await ApiMessage.getAllMessages(chatId, text);
            console.log('He4aderChats', allMessages);
            setAllMessages(allMessages);
            setText(true);
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error.message);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        let text = e.target.value;
        if (text) {
            handleGetChat(text);
        }else{
            setText(false);
        }
    };

    return(
        <div className=" container_header">
            <div className="container_button--header">
                <img src={imagenLogo} alt="Imagen Logo" className='logo_header'/>
            </div>
            <div className='search_container'>
                <Search 
                className="search_header" 
                handleSearch={handleSearch}
                />
                {Text &&
                    <SearchList
                    allMessages = {AllMessage}
                    />
                }
            </div>
            <div className="container_button--header" >
                <Dropdown 
                direction="down"
                isOpen={DropDown}
                toggle={OpenOrClose}
                >
                <DropdownToggle
                className="button_header"
                >
                    <span>{userName[0]}</span><span>{userSurname[0]}</span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                    onClick={(e) => handledShowProfile(e)}
                    className='dropdawn_text'
                    >
                        Mi Perfil
                    </DropdownItem>
                    <DropdownItem>
                        <Logout/>
                    </DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>
            <UpdateUser/>
        </div>
    )
};

export default HeaderChats