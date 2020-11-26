import * as actions from "../../actions/contractAddress/index";
import moment from "moment";

let initialState = {
    loading: false,
    errors: {},
    adresses: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.GET_ALL_CONTRACTS_ADDRESSES:
            return {
                ...state,
                loading: true
            }
        case actions.GET_ALL_CONTRACTS_ADDRESSES_FAILED:
            return {
                ...state,
                loading: false,
                errors: payload
            }
        case actions.GET_ALL_CONTRACTS_ADDRESSES_SUCCESS:
            return {
                ...state,
                addresses: payload
            }
        case actions.SET_VALUE:
            if (payload.loading) {
                payload.loading = { ...state.loading, ...payload.loading };
            }
            return {
                ...state,
                ...payload,
            };
        case actions.CLEAR_VALUES:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}

export default reducer;