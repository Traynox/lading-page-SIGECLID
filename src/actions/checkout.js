import { types } from "../types/types"

export const setDatosPersonales = (datos) => ({
    type: types.setDatos,
    payload: datos
});
export const setMensajeConfirmacion = (mensaje) => ({
    type: types.setMensaje,
    payload: mensaje
});
export const setCheckout = () => ({
    type: types.setCheckout
});