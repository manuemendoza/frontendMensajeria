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
        }
    }
};