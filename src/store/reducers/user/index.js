import * as actions from "../../actions/user/index";
import moment from "moment";

let initialState = {
    loading: false,
    errors: {},
    cliente: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.GET_USER_DATA:
            return {
                ...state,
                loading: true
            }
        case actions.GET_USER_DATA_FAILED:
            return {
                ...state,
                loading: false,
                errors: payload
            }
        case actions.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                cliente: payload
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