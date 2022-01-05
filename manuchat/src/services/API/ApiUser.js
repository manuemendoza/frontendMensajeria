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

    createUser: async (name, surname, email, password) => {
        let response = await fetch(`http://localhost:9525/users`,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": name,
                "surname": surname,
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

    UpDateUser: async (id, name, surName, email, password) => {
        
        let data = {};
        if (name) {
            data.name = name;
        }
        if (surName) {
            data.surName = surName;
        }
        if (email) {
            data.email = email;
        }
        if (password) {
            data.password = password;
        }

        let url = `http://localhost:9525/clients/${id}`;
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