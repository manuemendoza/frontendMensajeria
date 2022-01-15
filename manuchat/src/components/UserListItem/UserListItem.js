import { AddIdContact } from '../../services/actions/addIdContact/AddIdContact';
import { AddVisibility } from '../../services/actions/addVisibility/AddVisibility';
import store from '../../services/store/store';

const UserListItem = (props) => {
    const { contact } = props

    const handleContactUser = (e) => {
        const contact =JSON.parse(e.target.parentNode.dataset.user);
        const id = contact._id;
        if (contact) {
            store.dispatch(AddIdContact(id));
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