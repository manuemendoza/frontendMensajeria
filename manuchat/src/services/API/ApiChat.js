const baseUrl = `http://localhost:9525/chats`;

export const ApiChat = {
    createChat: async (title, adminId, userIds) => {
        let response = await fetch(baseUrl,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token') 
            },
            body: JSON.stringify({
                "title": title,
                "adminId": adminId,
                "userIds": userIds
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
    }
};