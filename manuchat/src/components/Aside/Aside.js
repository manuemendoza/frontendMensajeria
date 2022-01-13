import UserList from "../UserList/UserList";
import Button from '../Button/Button';
import userIcon from '../../img/bxs-user.png'
import chatIcon from '../../img/bxs-message-rounded-dots.png';

const Aside = () => {
    return(
        <aside>
            <div>
                <Button><img src={userIcon} alt='User Icon'/></Button>
                <Button><img src={chatIcon} alt='Chat Icon'/></Button>
            </div>
            <UserList/>
        </aside>
    )
};

export default Aside ;