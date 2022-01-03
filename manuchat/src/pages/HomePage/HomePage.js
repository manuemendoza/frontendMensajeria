import HeaderHome from "../../components/Header/HeaderHome";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

const HomePage = () =>{
    return(
        <>
        <HeaderHome/>
        <div>
            <Button>Registrarte Gratis</Button>
            <Button>Iniciar Sesión</Button>
        </div>
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
        <Footer/>
        </>
    )
};

export default HomePage