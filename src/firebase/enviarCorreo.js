import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export default async function enviarCorreo(firstName, lastName, email, plan) {

    const collectionRef = collection(db, 'mail');
    let contrato = '';
    if (plan === 1) {
        contrato = 'Basico';
    } else {
        contrato = 'Premium';
    }
    const emailContet = {
        to: email,
        message: {
            subject: `Hola ${lastName}`,
            text: ``,
            html: `<code>
    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;">
        <center style="width: 100%; background-color: #f1f1f1;">
            <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
              &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                <!-- BEGIN BODY -->
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                  <tr>
                  <td valign="middle" class="hero bg_white" style="padding: 3em 0 2em 0;">
                    <img src="../images/logo_1.png" alt="" style="width: 300px; max-width: 600px; height: auto; margin: auto; display: block;">
                  </td>
                  </tr>
                <tr>
                  <td valign="middle" class="hero bg_white" style="padding: 2em 0 4em 0;">
                    <table>
                        <tr>
                            <td>
                                <div class="text" style="padding: 0 2.5em; text-align: center;">
                                    <h2>Gracias por ser parte de SIGECLID. ${firstName}</h2>
                                    <h3>Su pago se realizó de forma exitosa! Usted ha adiquirida el plan ${contrato}.</h3>
                                    <p><a href="#" class="btn btn-primary">Iniciar Sesion</a></p>
                                </div>
                            </td>
                        </tr>
                    </table>
                  </td>
                </tr>
              <!-- 1 Column Text + Button : END -->
              </table>
            </div>
        </center>
    </body></code>`,
        }
    }
    return await addDoc(collectionRef, emailContet);

}