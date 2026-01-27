import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../global/status";
import { API } from "../http/index";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        token: localStorage.getItem("token") || "",
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
            if (action.payload) {
                localStorage.setItem("token", action.payload);
            } else {
                localStorage.removeItem("token");
            }
        },
    },
});

export const { setUser, setStatus, setToken } = authSlice.actions;
export default authSlice.reducer;

export function registerUser(data) {
    return async function registerUserThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await API.post("/auth/register", data);
            console.log("Register Response:", response.data);
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            console.log("Failed to register user:", error.response?.data);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

export function loginUser(data) {
    return async function loginUserThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await API.post("/auth/login", data);
            dispatch(setUser(response.data.data));
            dispatch(setToken(response.data.token));
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            console.log("Failed to login user:", error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}