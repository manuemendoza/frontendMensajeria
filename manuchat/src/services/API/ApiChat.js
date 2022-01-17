const baseUrl = `http://localhost:9525/chats`;

export const ApiChat = {
        createChat: async (title,  userIds) => {
        let data = {};
        if (title) {
            data.title = title;
        }
        if (userIds) {
            data.userIds = userIds;
        }
        let response = await fetch(baseUrl,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token') 
            },
            body: JSON.stringify(data)
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

    getChat: async (adminId) => {
        let url = baseUrl+`/user?adminId=${adminId}`
        let response = await fetch(url,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token') 
            },
        });
        const responseData = await response.json();
        if (!response.ok) {
            let err = new Error(responseData.message);
            err.code = responseData.code;
            err.status = response.status;
            throw err;
        }
        return responseData;
    }
};