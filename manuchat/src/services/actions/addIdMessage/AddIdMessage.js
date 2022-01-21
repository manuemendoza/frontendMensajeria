export const AddIdMessage = (id) => {
    return({
        type: "ADD_IDMESSAGE",
        payload:{
            "id": id
        }
    })
};
