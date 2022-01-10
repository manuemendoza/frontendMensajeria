import Button from "../Button/Button";
import Logout from "../Logout/Logout";
import Search from "../Search/Search"
import UpdateUser from "../Updates/UpdateUser";

const HeaderChats = (props) => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    return(
        <div>
            <Search></Search>
            <Button>{userLocal.username}</Button>
            <Logout></Logout>
            <UpdateUser
            id={userLocal.id}
            name={userLocal.name}
            surname={userLocal.surname}
            username={userLocal.username}
            email={userLocal.email} 
            contacts={userLocal.contacts}
            />
        </div>
    )
};

export default HeaderChats