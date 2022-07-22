import { types } from "../types/types";

const initialState={
    producto:[]
}

export const cestaReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.setProducto:
            return {
                ...state,
                producto:[...state.producto,action.payload]
            }
    
        default:
            return state;
    }
}