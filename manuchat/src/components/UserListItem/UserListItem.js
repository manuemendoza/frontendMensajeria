import { AddUser } from '../../services/action/addUser/AddUser'
import { AddVisibility } from '../../services/action/addVisibility/AddVisibility';
import store from '../../services/store/store';

const UserListItem = (props) => {
    const { contact } = props

    const handleContactUser = (e) => {
        const contact =JSON.parse(e.target.parentNode.dataset.user);
        const id = contact._id;
        const name = contact.name;
        const surname = contact.surname;
        const username = contact.username;
        const email = contact.email;
        if (contact) {
            store.dispatch(AddUser(id, name, surname, username, email));
            store.dispatch(AddVisibility(true));
            
        }; 
        }
        

    return(
        <div
            data-user= {`${JSON.stringify(contact)}`} 
            onClick={(e) => handleContactUser(e)}
        >
            <h3>{`${contact.name} ${contact.surname}`}</h3>
        </div>
    )
};

export default UserListItem;