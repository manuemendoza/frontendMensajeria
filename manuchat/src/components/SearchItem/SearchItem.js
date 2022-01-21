import "./SearchItem.scss"
import store from '../../services/store/store';
import { AddIdMessage } from "../../services/actions/addIdMessage/AddIdMessage";
import { AddIdChat } from "../../services/actions/addIdChat/AddIdChat";
import { AddShowCard } from '../../services/actions/addShowCard/AddShowCard';

const SearchItem = (props) => {
    const { message } = props;
    console.log('SearchItem', message);
    let text = message.text
    let name = message.userId.name;
    let d = new Date(message.createdAt)
    let date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
    
    const handleMessageId = (e) => {
        const chatid = e.target.parentNode.dataset.chatid,
            messageid = e.target.parentNode.dataset.messageid;

        if (chatid) {
            store.dispatch(AddIdChat(chatid._id));
            store.dispatch(AddShowCard(true));
        };

        if (messageid) {
            store.dispatch(AddIdMessage(messageid));
        };
    }
        

    return(
        <div className='container searchItem'>
            <ul
            data-messageid= {message._id} 
            data-chatid= {message.chatId} 
            onClick={(e) => handleMessageId(e)}
            className='searchItem'
            >
                <li className='search_name'>{`${name}`}</li>
                <li className="search_text">
                    <div>
                        {`${text} `}
                    </div> 
                    <span>{`${date}`}</span>
                    </li>
                
            </ul> 
        </div>
    )
};

export default SearchItem;