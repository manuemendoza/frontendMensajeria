import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import userIcon from '../../img/bxs-user.png'
import chatIcon from '../../img/bxs-message-rounded-dots.png';
//esto se puede borrrar

const ChangeToUsersOrChats = () => {
    const navigate = useNavigate();

    const handleRedirectionToUser = () =>{
        navigate('#');
        console.log('to user');
    };
    const handleRedirectionToChat = () =>{
        navigate('#');
        console.log('to chat');
    };

    return(
        <div>
        <Button onClick={() => handleRedirectionToUser()}><img src={userIcon} alt='User Icon'/></Button>
        <Button onClick={() => handleRedirectionToChat()}><img src={chatIcon} alt='Chat Icon'/></Button>
        </div>
    )
};

export default ChangeToUsersOrChats;