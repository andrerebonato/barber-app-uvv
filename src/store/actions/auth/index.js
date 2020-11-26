import * as api from '../../../services/api';
import configs from '../../../configuration/index';
import { validateEmail } from '../../../utils/validateEmail';

export const SET_VALUE = "[AUTH] SET_VALUE";
export const CLEAR_VALUES = "[AUTH] CLEAR_VALUES";

export const LOGOUT = "[AUTH] LOGOUT";

export const LOGIN = "[AUTH] LOGIN";
export const LOGIN_SUCCESS = "[AUTH] LOGIN_SUCCESS";
export const LOGIN_FAILED = "[AUTH] LOGIN_FAILED";

export const RESET_PASSWORD = "[AUTH] RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "[AUTH] RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "[AUTH] RESET_PASSWORD_FAILED";

export function submitRecoveryPassword(callback) {
    return async (dispatch, getState) => {
        dispatch({
            type: RESET_PASSWORD
        });

        const { emailResetPassword } = getState().auth;

        let errors = {};

        if(!validateEmail(emailResetPassword)) {
            errors.emailResetPassword = "Email inválido.";
        }

        if(!emailResetPassword) {
            errors.emailResetPassword = "Este campo é obrigatório.";
        }

        dispatch(
            setValue({ loading: false, errors: errors })
        );

        try {
            const response = await api.sendPost(configs.msEndpoints.auth.eps.resetPassword, { email: emailResetPassword });

            const result = await response.json();

            if(result.isValid) {
                callback && callback(false, result.model);
                dispatch({
                    type: RESET_PASSWORD_SUCCESS,
                    payload: result.model
                });
            } else {
                callback && callback(result.model);
                dispatch({
                    type: RESET_PASSWORD_FAILED,
                    payload: result.model
                });
            }

        } catch(err) {
            callback && callback(err);
            return dispatch({
                type: RESET_PASSWORD_FAILED,
                payload: err
            });
        }
    }
};

export function submitLogin(callback) {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN
    });

    const { password, email } = getState().auth;

    let errors = {};

    if(!validateEmail(email)) {
        errors.email = "Email inválido.";
    }

    if(!password) {
        errors.password = "Este campo é obrigatório.";
    }

    if(!email) {
        errors.email = "Este campo é obrigatório.";
    }

    dispatch(
        setValue({ loading: false, errors: errors })
    );

    if(!password || !email) return;

    /*
        temporario ate liberar a api de autenticacao
    */

    dispatch(
        setValue({
            token: "token",
            user: {
                nome: "Andre Rebonato",
                email,
                password,
                cpf: "111.222.333-44"
            }
        })
    )

    return;

    try {

        const response = await api.sendPost(configs.msEndpoints.auth.eps.submitLogin, { password, email });

        const result = await response.json();

        if(result.isValid) {
            callback && callback(false, result.model);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: result.model
            });
        } else {
            callback && callback(result.model);
            dispatch({
                type: LOGIN_FAILED,
                payload: result.model
            });
        }

    } catch(err) {
        callback && callback(err);
        return dispatch({
            type: LOGIN_FAILED,
            payload: err
        });
    }
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function setValue(payload) {
  return { type: SET_VALUE, payload };
}

export function clearValues() {
  return { type: CLEAR_VALUES };
}
