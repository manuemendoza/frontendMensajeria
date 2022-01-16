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
        <div
            data-userid= {contact._id} 
            onClick={(e) => handleContactUser(e)}
        >
            <h3>{`${contact.name} ${contact.surname}`}</h3>
        </div>
    )
};

export default UserListItem;