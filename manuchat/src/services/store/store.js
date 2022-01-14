import { createStore } from 'redux';

const initialState =  {
    user:[],
    chat: [],
    visibility: false


    
};

const reduce = (globalState=initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return{
                ...globalState,
                user: action.payload
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