import { types } from "../types/types"

export const setProducto = (datos) => ({
    type: types.setProducto,
    payload: datos
});
export const setCesta = () => ({
    type: types.setCesta
});