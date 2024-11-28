import axios from "axios";

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/register`, userData);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error.response.data.message });
  }
};


// Login Action
export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/login`, credentials);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });

    // Save user info in localStorage
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/dashboard");
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error.response?.data?.message || "Server error",
    });
  }
};

// Logout Action
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "USER_LOGOUT" });
};