import { createSlice } from "@reduxjs/toolkit";
import { API } from "../http";
import { STATUSES } from "../global/status";

const authSlice = createSlice({
      name: "auth",
      initialState:{
            data: [],
            status: STATUSES.IDLE,
            token: localStorage.getItem("token") || "",
            email: ""
      },
      reducers:{
            setUser: (state, action)=>{
                  state.data = action.payload;
            },
            setStatus: (state, action)=>{
                  state.status = action.payload;
            },
            setToken: (state, action)=>{
                  state.token = action.payload;
                  if(action.payload){
                        localStorage.setItem("token", action.payload)
                  } else {
                        localStorage.removeItem("token")
                  }
            },
            logOut: (state)=>{
                  state.data = [],
                  state.token = "",
                  localStorage.removeItem("token"),
                  localStorage.removeItem("userId"),
                  state.status = STATUSES.IDLE
            },
            resetAuthStatus:(state)=>{
                  state.status = STATUSES.LOADING
            },
            setEmail: (state, action) => {
              state.email = action.payload;
            }
      }
})

export const { setUser, setStatus, setToken, logOut, resetAuthStatus, setEmail} = authSlice.actions;
export default authSlice.reducer;

export function registerUser(data){
      return async function registerUserThunk(dispatch){
            dispatch(setStatus(STATUSES.LOADING))
            try{
                  const response = await API.post("/auth/register", data)
                  if(response.status === 201){
                        console.log("Registration Response:", response.data.data.role);
                        dispatch(setStatus(STATUSES.SUCCESS))
                  }
            } catch(error){
                  console.error("Registration Error:", error);
                  dispatch(setStatus(STATUSES.ERROR))
                  throw error;
            }
      }
}

export function loginUser(data){
      return async function loginUserThunk(dispatch){
            dispatch(setStatus(STATUSES.LOADING))
            try {
                  const response = await API.post("/auth/login", data)
                  if(response.status === 200){
                        dispatch(setUser(response.data.data))
                        localStorage.setItem("user", JSON.stringify(response.data.data))
                        dispatch(setToken(response.data.token))
                        dispatch(setStatus(STATUSES.SUCCESS))
                  }
            } catch (error) {
                  console.log("Login Error:", error)
                  dispatch(setStatus(STATUSES.ERROR))
                  throw error;
            }
      }
}

export function forgotPassword(data) {
  return async function forgotPasswordThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("/auth/forgotpassword", data);
      dispatch(setEmail(response.data.data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
      throw error; 
    }
  };
}

export function verifyOTP(data) {
  return async function verifyOTPThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("/auth/verifyotp", data);
      dispatch(setEmail(data.email));
      dispatch(setStatus(STATUSES.SUCCESS));
      return response; 
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
      throw error; 
    }
  };
}

export function resetPassword(data) {
  return async function resetPasswordThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("/auth/resetpassword", data);
      dispatch(setStatus(STATUSES.SUCCESS));
      return response;
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
      throw error; 
    }
  };
}