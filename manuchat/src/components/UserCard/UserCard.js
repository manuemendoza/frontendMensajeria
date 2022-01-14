const UserCard = (props) => {
    const { contact } = props;
    console.log(contact);
    return(
        <div className="main_prueba--contenido">
            <h5>NickName: {contact.username}</h5>
            <p>Nombre: {contact.name} Apellido: {contact.surname}</p>
            <p>email: {contact.email}</p>
        </div>
    )
};

export default UserCard;