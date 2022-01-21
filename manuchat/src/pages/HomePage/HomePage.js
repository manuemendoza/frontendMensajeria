import NavBar from "../../components/Navbar/Navbar";
import imagenLogo from '../../img/logodelado.png';
import "./HomePage.scss"

const HomePage = () =>{
    return(
        <>
        <div>
            <img src={imagenLogo} alt="Imagen Logo" className='logo_login'/>
        </div>
        <NavBar/>
        <main>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent tincidunt ipsum sed sem pulvinar blandit. 
            Aliquam non elit leo. Aliquam leo massa, tincidunt vitae pellentesque eget, 
            ullamcorper eget velit. Ut efficitur, nunc eget congue volutpat, 
            purus erat commodo tortor, ac suscipit nulla massa ac augue. 
            Donec consectetur quis magna non blandit. Donec fermentum, 
            sem vel lobortis placerat, tellus nibh aliquam nulla, non viverra odio tellus in quam. 
            Proin pellentesque turpis in orci congue vulputate. 
            Ut auctor diam vel magna accumsan sodales. Aliquam ultrices, 
            tellus sit amet scelerisque tincidunt, nisi odio tincidunt risus, vel laoreet turpis metus nec nisi. Nullam turpis tortor,
            pulvinar pretium mi quis, consequat vulputate lectus.
            </p>
        </main>

        </>
    )
};

export default HomePage