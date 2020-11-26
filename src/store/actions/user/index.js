import * as api from '../../../services/api';
import configs from '../../../configuration/index';

export const SET_VALUE = "[USER] SET_VALUE";
export const CLEAR_VALUES = "[USER] CLEAR_VALUES";

export const GET_USER_DATA = "[USER] GET_USER_DATA";
export const GET_USER_DATA_SUCCESS = "[USER] GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILED = "[USER] GET_USER_DATA_FAILED";

export function getUserData(email, callback) {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_USER_DATA,
        });

        try {
             
            const response = await api.sendPost(configs.msEndpoints.userProfile.eps.getData, {
                email
            });

            const result = await response.json();

            if(result.isValid) {
                callback && callback(null, result.model);
                dispatch({
                    type: GET_USER_DATA_SUCCESS,
                    payload: result.model
                });
            } else {
                callback && callback(result.model);
                dispatch({
                    type: GET_USER_DATA_FAILED,
                    payload: result.model
                });
            }
        } catch(err) {
            callback && callback(err);
            dispatch({
                type: GET_USER_DATA_FAILED,
                payload: err
            });
        }
    }
}

export function setValue(payload) {
    return { type: SET_VALUE, payload };
}
  
export function clearValues() {
    return { type: CLEAR_VALUES };
}