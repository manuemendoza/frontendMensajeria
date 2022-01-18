import { AddIdChat } from '../../services/actions/addIdChat/AddIdChat';
import { AddShowCard } from '../../services/actions/addShowCard/AddShowCard';
import store from '../../services/store/store';

const ChatListItem = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { chat } = props;
    
    let title = chat.title

    if (chat.title === undefined) {
        if (user.id === chat.userIds[0]._id) {
            title=user.name
        } else {
            title = chat.userIds[0].name
        }
    }
    
    const handleChatId = (e) => {
        const id = e.target.parentNode.dataset.chatid;
        if (id) {
            store.dispatch(AddIdChat(id));
            store.dispatch(AddShowCard(true));
        }; 
    }
        

    return(
        <div
            data-chatid= {chat._id} 
            onClick={(e) => handleChatId(e)}
        >
            <h3>{`${title}`}</h3>
        </div>
    )
};

export default ChatListItem;