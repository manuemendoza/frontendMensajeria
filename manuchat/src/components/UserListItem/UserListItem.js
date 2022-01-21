import "./UserListItem.scss"
import { AddIdContact } from '../../services/actions/addIdContact/AddIdContact';
import { AddShowCard } from '../../services/actions/addShowCard/AddShowCard';
import store from '../../services/store/store';

const UserListItem = (props) => {
    const { contact } = props

    const handleContactUser = (e) => {
        const id = e.target.parentNode.dataset.userid;
        if (id) {
            store.dispatch(AddIdContact(id));
            store.dispatch(AddShowCard(true));
        }; 
        }
        

    return(
        <div>
            <ul
            data-userid= {contact._id} 
            onClick={(e) => handleContactUser(e)}
            >
                <li className="item" >{`${contact.name} ${contact.surname}`}</li>
            </ul>
        </div>
    )
};

export default UserListItem;