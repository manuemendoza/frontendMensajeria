import Button from '../Button/Button';
import userIcon from '../../img/bxs-user.png'
import chatIcon from '../../img/bxs-message-rounded-dots.png';

const AsideButton = () => {
    return(
            <div>
                <Button><img src={userIcon} alt='User Icon'/></Button>
                <Button><img src={chatIcon} alt='Chat Icon'/></Button>
            </div>
    )
};

export default AsideButton ;