import { AddIdChat } from '../../services/actions/addIdChat/AddIdChat';
import { AddShowCard } from '../../services/actions/addShowCard/AddShowCard';
import { ApiUser } from '../../services/API/ApiUser';
import { useState } from "react";
import store from '../../services/store/store';
import "./SearchItem.scss"

const SearchItem = (props) => {
    const { message } = props;
    let text = message.text
    let name = message.userId.name;
    console.log('esto es Item ', message.createdAt);

    // const user = JSON.parse(localStorage.getItem('user'));
    // const { chat } = props;
    // const [ContactName, setContactName] = useState();
    // let contacId = chat.adminId;
    // let title = chat.title;

    // const handleGetUser = async (id) => {
    //     try {
    //         let res = await ApiUser.getUser(id);
    //         setContactName(res.name);
    //     } catch (error) {
    //         if (error.status === 401) {
    //             localStorage.setItem('token', []);
    //         }
    //         console.error(error.message);
    //     }
    // };

    // if (chat.title === undefined) {
    //     if (user.id === chat.userIds[0]._id) {
    //         handleGetUser(contacId)
    //         title=ContactName
    //     } else {
    //         title = chat.userIds[0].name
    //     }
    // }
    
    const handleChatId = (e) => {
        const id = e.target.parentNode.dataset.chatid;
        console.log('este es el id del mesage ', id);
        // if (id) {
        //     store.dispatch(AddIdChat(id));
        //     store.dispatch(AddShowCard(true));
        // }; 
    }
        

    return(
        <div className='container searchItem'>
            <ul
            // data-chatid= {chat._id} 
            onClick={(e) => handleChatId(e)}
            className='searchItem'
            >
                <li className='search_name'>{`${name}`}</li>
                <li className="search_text">{`${text}`} <span></span></li>
                
            </ul> 
        </div>
    )
};

export default SearchItem;