import Button from "../Button/Button";
import './HeaderChats.scss';
import Logout from "../Logout/Logout";
import Search from "../Search/Search";
import UpdateUser from "../Updates/UpdateUser";
import { useState } from "react";

const HeaderChats = (props) => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    const nameUser = userLocal.name.split('');
    const surnameUser = userLocal.surname.split('');
    const [ShowProfile, setShowProfile] = useState(false);

    const handledShowProfile = (e) => {
        e.preventDefault();
        console.log(e);
        if (!ShowProfile) {
            setShowProfile(true);
        } else{
            setShowProfile(false);
        }
    };

    return(
        <div className="container_header">
            <Search></Search>
            <div className="container_user">
                <Button className="headerChats_user" onClick={(e)=>handledShowProfile(e)}>{nameUser[0]+surnameUser[0]}</Button>
            </div>
            {ShowProfile 
            ?
            <div>
                <ul>
                    <li>Mi Perfil <UpdateUser/></li>
                    <li><Logout/></li>
                </ul>
                
            </div>
            : <div></div>
            }
        </div>
    )
};

export default HeaderChats