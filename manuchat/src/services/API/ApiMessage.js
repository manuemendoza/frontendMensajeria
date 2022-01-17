const baseUrl = `http://localhost:9525/messages`;

export const ApiMessage = {
    createMessage: async (text, chatId) => {
        let data = {};
        if (text) {
            data.text = text;
        }
        if (chatId) {
            data.chatId = chatId;
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