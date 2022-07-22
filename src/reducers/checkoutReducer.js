import { types } from "../types/types";

const initialState = {
    datosPersonales: [],
    mensaje: ""
}

export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setDatos:
            return {
                ...state,
                datosPersonales: [...state.datosPersonales, action.payload]
            }
        case types.setMensaje:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}