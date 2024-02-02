import { createSlice } from "@reduxjs/toolkit";

const initialState = { // needs to be called initialState if not going to explicitly call initialState: ... below
    status: false, //user not authed
    userData: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.status = false
            state.userData = null
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer