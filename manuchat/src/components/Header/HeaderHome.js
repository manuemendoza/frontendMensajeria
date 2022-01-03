import Logo from "../Logo/Logo";
import NavHome from "../NavBar/NavHome";
import Button from "../Button/Button";
import './HeaderHome.scss';

const HeaderHome = () =>{
    return(
        <>
        <div className="container">º
            <div className="container">
            <Logo/>
            <NavHome/>
            </div>
            <div>
            <Button className="button button_register">Registrarte Gratis</Button>
            <Button className="button button_login">Iniciar Sesión</Button>
            </div>
        </div>
        </>
    )
};

export default HeaderHome