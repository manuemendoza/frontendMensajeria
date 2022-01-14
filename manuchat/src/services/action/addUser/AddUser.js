export const AddUser = (id, name, surname, username, email) => {
    return({
        type: "ADD_USER",
        payload:{
            "id": id,
            "name": name,
            "surname": surname,
            "username": username,
            "email": email
        }
    })
};

