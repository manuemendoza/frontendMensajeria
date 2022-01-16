import { createStore } from 'redux';

const initialState =  {
    idContact:[],
    chat: [],
    showModal: false,
    showCard: false,
    newContact: false,
    deleteContact: false

    
};

const reduce = (globalState=initialState, action) => {
    switch (action.type) {
        case "ADD_IDCONTACT":
            return{
                ...globalState,
                idContact: action.payload
            }    
        case "ADD_SHOWCARD":
            return{
                ...globalState,
                showCard: action.payload
            }    
        case "ADD_SHOWMODAL":
            return{
                ...globalState,
                showModal: action.payload
            }    
        case "ADD_NEWCONTACT":
            return{
                ...globalState,
                newContact: action.payload
            }    
        case "ADD_DELETECONTACT":
            return{
                ...globalState,
                deleteContact: action.payload
            }    
        default:
            return globalState ;
    }
};

export default createStore(reduce);