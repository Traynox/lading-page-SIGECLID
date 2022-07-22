import { types } from "../types/types"

export const setProducto = (datos) => ({
    type: types.setProducto,
    payload: datos
});