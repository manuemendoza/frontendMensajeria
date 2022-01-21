import { ApiUser } from '../../services/API/ApiUser';
import { useState } from "react";
import store from '../../services/store/store';
import "./SearchItem.scss"

const SearchItem = (props) => {
    const { message } = props;
    let text = message.text
    let name = message.userId.name;
    let d = new Date(message.createdAt)
    let date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
    


    
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
            data-chatid= {message._id} 
            onClick={(e) => handleChatId(e)}
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