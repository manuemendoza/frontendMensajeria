import "./SearchList.scss"
import SearchItem from "../SearchItem/SearchItem";


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

