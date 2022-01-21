import "./UserList.scss"
import { useEffect, useState } from "react";
import { ApiUser } from "../../services/API/ApiUser";
import store from "../../services/store/store";
import UserListItem from "../UserListItem/UserListItem";
import { AddNewContact } from "../../services/actions/addNewContact/AddNewContact";

const UserList = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const [Contacts, setContacts] = useState([])
    const [NewContact, setNewContact] = useState(false)
    
    const handleGetUser = async (id) => {
        try {
            let res = await ApiUser.getUser(id);
            setContacts(res.contacts);
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error.message);
        }
    };

    store.subscribe(() => {
        setNewContact(store.getState().newContact);
    });
    
    useEffect(() => {
        handleGetUser(id);
        store.dispatch(AddNewContact(false));
    },[NewContact, id]);

    return(
        <div className="aside_list">
            {Contacts.map(contact => <UserListItem
                key={contact._id}
                contact={contact}
            />)}
        </div>
    )
};

export default UserList;