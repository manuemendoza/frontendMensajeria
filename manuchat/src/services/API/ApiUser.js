export const ApiUser = {
    loginUser: async (email, password) => {
        try {
            let result = await fetch(`http://localhost:9525/users/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            });
            const userData = await result.json();
            return userData;
        } catch (error) {
            console.log(error);
        };
    },

    createUser: async (name, surname, email, password) => {
        try {
            let result = await fetch(`http://localhost:9525/users`,{
                method:"POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "name": name,
                    "surname": surname,
                    "email": email,
                    "password": password
                })
            });
            const userData = await result.json();
            return userData;
        } catch (error) {
            console.log(error);
        };
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

        let userUpDate;
        let url = `http://localhost:9525/clients/${id}`;
        const result = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token') 
            },
            body: JSON.stringify(data)
        })
        userUpDate = await result.json();
        console.log(userUpDate);
        return userUpDate;
    }
};