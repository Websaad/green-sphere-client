const initialState = { loading: false, user: null, error: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { ...state, loading: true };
    case "USER_REGISTER_SUCCESS":
      return { loading: false, user: action.payload, error: null };
    case "USER_REGISTER_FAIL":
      return { loading: false, user: null, error: action.payload };
      case "USER_LOGIN_REQUEST":
        return { ...state, loading: true, error: null };
      case "USER_LOGIN_SUCCESS":
        return { loading: false, user: action.payload, error: null };
      case "USER_LOGIN_FAIL":
        return { loading: false, user: null, error: action.payload };
      case "USER_LOGOUT":
        return { user: null, loading: false, error: null };
    default:
      return state;
  }
};
