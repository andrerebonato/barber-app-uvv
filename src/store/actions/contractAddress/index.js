import * as api from '../../../services/api';
import configs from '../../../configuration/index';

export const SET_VALUE = "[CONTRACT_ADDRESS] SET_VALUE";
export const CLEAR_VALUES = "[CONTRACT_ADDRESS] CLEAR_VALUES";

export const GET_ALL_CONTRACTS_ADDRESSES = "[CONTRACT_ADDRESS] GET_ALL_CONTRACTS_ADDRESSES";
export const GET_ALL_CONTRACTS_ADDRESSES_SUCCESS = "[CONTRACT_ADDRESS] GET_ALL_CONTRACTS_ADDRESSES_SUCCESS";
export const GET_ALL_CONTRACTS_ADDRESSES_FAILED = "[CONTRACT_ADDRESS] GET_ALL_CONTRACTS_ADDRESSES_FAILED";

export function getAll(userId, callback) {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_ALL_CONTRACTS_ADDRESSES
        });

        const { token } = getState().auth;

        try {

            const response = await api.sendGet(
                `${configs.msEndpoints.contractAddress.eps.getAll}/${userId}`
            );

            const result = await response.json();

            if(result.isValid) {
                callback && callback(null, result.model);
                dispatch({
                    type: GET_ALL_CONTRACTS_ADDRESSES_SUCCESS,
                    payload: result.model
                });
            } else {
                callback && callback(result.model);
                dispatch({
                    type: GET_ALL_CONTRACTS_ADDRESSES_FAILED,
                    payload: result.model
                })
            }

        } catch (err) {
            callback && callback(err);
            return dispatch({
                type: GET_ALL_CONTRACTS_ADDRESSES_FAILED,
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
  