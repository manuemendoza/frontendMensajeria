const ChatCard = (props) => {
    const { chat } = props
    return(
        <div>
            <p>{chat.title}</p>
        </div>
    )
};

export default ChatCard;