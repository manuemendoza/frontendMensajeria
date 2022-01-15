import { useEffect, useState } from "react";
import { ApiUser } from "../../services/API/ApiUser";
import UserListItem from "../UserListItem/UserListItem";

const UserList = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const [Contacts, setContacts] = useState([])
    
    const handleGetUser = async (id) => {
        try {
            let res = await ApiUser.getUser(id);
            setContacts(res.contacts);
        } catch (error) {
            console.error(error.message);
        }
    };
    
    useEffect(() => {
        handleGetUser(id);
    }, []);

    return(
        <div>
            {Contacts.map(contact => <UserListItem
                key={contact._id}
                contact={contact}
                />)}
        </div>
    )
};

export default UserList;