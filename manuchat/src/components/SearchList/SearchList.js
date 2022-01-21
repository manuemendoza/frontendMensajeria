import { useEffect, useState } from "react";
import { AddNewChat } from "../../services/actions/addNewChat/AddNewChat";
import { ApiChat } from "../../services/API/ApiChat";
import store from "../../services/store/store";
import ChatListItem from "../ChatListItem/ChatListItem";
import SearchItem from "../SearchItem/SearchItem";
import "./SearchList.scss"


const SearchList = (props) => {
    const { allMessages } = props;
    const messages = allMessages;

    return(
        <div className="searchlist">
            {messages.map(message => <SearchItem
                key={message._id}
                message={message}
            />)} 
        </div>
    )
};

export default SearchList;

