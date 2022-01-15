import { createStore } from 'redux';

const initialState =  {
    idContact:[],
    chat: [],
    visibility: false


    
};

const reduce = (globalState=initialState, action) => {
    switch (action.type) {
        case "ADD_IDCONTACT":
            return{
                ...globalState,
                idContact: action.payload
            }    
        case "ADD_VISIBILITY":
            return{
                ...globalState,
                visibility: action.payload
            }    
        default:
            return globalState ;
    }
};

export default createStore(reduce);