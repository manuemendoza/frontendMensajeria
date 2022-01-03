import { Link } from "react-router-dom";
import './NavHome.scss';

const NavHome  = () =>{

    return(
        <>
        <div className="navbar_conteiner">
            <nav className="navbar">
                <ul className="navbar_link">
                    <li>
                        <Link to="#">Conocenos</Link>
                        <ul className="navbar_ul">
                            <li><Link to="#">Quienes Somos</Link></li>
                            <li><Link to="#">Nuestras Instalaciones</Link></li>
                            <li><Link to="#">Trabaja con nosotros</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">Solution</Link>
                        <ul className="navbar_ul" >
                            <li><Link to="#">Para Uso Personal</Link></li>
                            <li><Link to="#">Para el hogra</Link></li>
                            <li><Link to="#">Para la Educación</Link></li>
                            <li><Link to="#">Para el Trabajo</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">Resource</Link>
                    </li>
                    <li>
                        <Link to="#">Contactanos</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
};

export default NavHome;