import { types } from "../types/types"
import axios from 'axios'
import { url } from "../helpers/apiUrl";
export const store = () => {

    return async (dispatch, getState) => {

        // const {id}= getState().auth;
        const { datosPersonales } = getState().checkout;
        // datosPersonales[0] = { ...datosPersonales, idPlan: 1 }

        const storeUsuario = { ...datosPersonales }
        //   delete storeUsuario.id_paciente;
        const store = { ...storeUsuario[0] };
        console.log("Este del store", store);
        await axios.post(`${url('auth/register')}`, store).then(
            response => {
                console.log(response);
            }
        ).catch(error => {
            console.log(error.response);
        });
    }

}