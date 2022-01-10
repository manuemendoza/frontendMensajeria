export const ApiUser = {
    loginUser: async (email, password) => {
        let response = await fetch(`http://localhost:9525/users/login`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });
        const responseData = response.json();
        if (!response.ok) {
            let err = new Error(responseData.message);
            err.code = response.status;
            throw err;
        }
        return responseData;
    },

    createUser: async (name, surname, username, email, password) => {
        let response = await fetch(`http://localhost:9525/users`,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": name,
                "surname": surname,
                "username": username,
                "email": email,
                "password": password
            })
        });
        const responseData = await response.json();
        if (!response.ok) {
            let err = new Error(responseData.message);
            err.code = responseData.code;
            err.status = response.status;
            throw err;
        }
        return responseData;
    },

    UpDateUser: async (id, name, surname, username, email, password, contacts) => {
        
        let data = {};
        if (name) {
            data.name = name;
        }
        if (surname) {
            data.surname = surname;
        }
        if (username) {
            data.username = username;
        }
        if (email) {
            data.email = email;
        }
        if (password) {
            data.password = password;
        }
        if (contacts) {
            data.contacts = contacts;
        }
        let url = `http://localhost:9525/users/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token') 
            },
            body: JSON.stringify(data)
        })
        const responseData = response.json();

        if (!response.ok) {
            let err = new Error(responseData.message);
            err.code = response.status;
            throw err;
        }

        return responseData;
    }
};