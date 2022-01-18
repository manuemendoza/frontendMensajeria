require('dotenv').config();
const baseUrl = `http://localhost:9525/users`;
export const ApiUser = {
    loginUser: async (email, password) => {
        let response = await fetch(baseUrl+`/login`, {
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
        let response = await fetch(baseUrl,{
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
        let url = baseUrl+`${id}`;
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
    },
    
    searchUser: async (email) => {
        let url = baseUrl+`?email=${email}`
        let response = await fetch(url,{
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
        });
        const responseData = await response.json();
        
        if (!response.ok) {
            let err = new Error(responseData.message);
            err.code = response.status;
            throw err;
        }
        return responseData
    },

    addContact: async (id, idUser) => {
        let url = baseUrl+`/${id}/contacts`; 
        let response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "userId": idUser
            })
        });
        const responseData = await response.json();
        
        if (!response.ok) {
            let err = new Error(responseData.message);
            err.code = responseData.code;
            err.status = response.status;
            err.message= response.message
            throw err;
        }
        return responseData;
    },
    
    getUser: async (id) => {
        let url = baseUrl+`/${id}`;
        let response = await fetch(url, {
            method: "GET",
            headers: { "Authorization": "Bearer " + localStorage.getItem('token') }
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

    deleteContact: async (id, contacId) => {
        let url = baseUrl+`/${id}/contacts/${contacId}`;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token') 
            },
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