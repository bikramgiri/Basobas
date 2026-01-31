import { createSlice } from "@reduxjs/toolkit";
import { API } from "../http";
import { STATUSES } from "../global/status";

const authSlice = createSlice({
      name: "auth",
      initialState:{
            data: [],
            status: STATUSES.IDLE,
            // token: "",
            token: localStorage.getItem("token") || ""
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
            }
      }
})

export const { setUser, setStatus, setToken, logOut, resetAuthStatus} = authSlice.actions;
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