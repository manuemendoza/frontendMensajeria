import Search from "../Search/Search";
import { ApiUser } from "../../services/API/ApiUser";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import UserList from "../UserList/UserList";


const DeleteContact = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const [Contacts, setContacts] = useState([])
    // const [Contact, setContact] = useState([]);
    // const [Found, setFound] = useState(false);
    
    const handleGetUser = async (id) => {
        let res = await ApiUser.getUsers(id);
        setContacts(res.contacts);
    };
    useEffect(() => {
        handleGetUser(id);
    }, []);

    return(
        <div>
            <p>lista contacts</p>
            <div>
                <UserList
                Contacts={Contacts}
                />
            </div>
        </div>
        )
};

export default DeleteContact;