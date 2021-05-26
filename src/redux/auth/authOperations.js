import axios from "axios";
import {
  loginError,
  loginRequest,
  loginSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authActions";
export const registerOperations = (user) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCs3GkkHZoa9k1WevJesSXcmQpay0eSyRc
`,
      { ...user, returnSecureToken: true }
    );
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.response.data.error.message));
  } finally {
  }
};
export const loginOperations = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCs3GkkHZoa9k1WevJesSXcmQpay0eSyRc
`,
      { ...user, returnSecureToken: true }
    );
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data.error.message));
  } finally {
  }
};
