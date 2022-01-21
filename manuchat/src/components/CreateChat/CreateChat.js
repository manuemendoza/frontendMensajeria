import { ApiChat } from "../../services/API/ApiChat";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import imagenLogo from "../../img/logodelado.png"

const CreateChat = () => {
    const HandleCreateChats = async(e) =>{
        e.preventDefault()
        const title = e.target.title.value;
        try {
            const res = await ApiChat.createChat(title);
        } catch (error) {
            console.log(error.message);
            console.log(error.code);
            console.error( error.message);
        }
    };
    return(
        <div>
            <form onSubmit={(e) => HandleCreateChats(e)} className="form">
                <div>
                    <label className="text">
                        <input
                            type='text'
                            name='name'
                            placeholder="Nombre"
                            required />
                    </label>
                    <Search></Search>
                </div>
                <Button type="onSubmit" className="login_button">aceptar</Button>
            </form>
        </div>
    )
};

export default CreateChat;