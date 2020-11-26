import * as actions from "../../actions/auth/index";
import moment from "moment";

let initialState = {
  user: null,
  token: null,
  expiration: null,
  emailResetPassword: "",
  email: "",
  password: "",
  loading: false,
  errors: {}
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.LOGOUT:
      return {
        ...initialState,
      };
    case actions.RESET_PASSWORD:
      return {
        ...state,
        loading: { ...state.loading, resetPassword: true }
      }
    case actions.LOGIN:
      return {
        ...state,
        errors: initialState.errors,
        loading: { ...state.loading, login: true },
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        expiration: moment(payload.expiration),
        loading: { ...state.loading, login: false },
      };
    case actions.LOGIN_FAILED:
      return {
        ...state,
        loading: { ...state.loading, login: false },
        errors: payload,
      };
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
};

export default reducer;
