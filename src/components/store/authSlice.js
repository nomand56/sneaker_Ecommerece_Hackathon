import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: [],
        logedIn: false,
    },
    reducers: {
        loginOK(state, action) {
            let data = action.payload;
            localStorage.setItem("token", data.myToken)
            state.logedIn = true
        },


        logout(state) {
            localStorage.clear("token")
            state.logedIn = false


        }




    }
})
export const { loginOK, logout } = authSlice.actions;

export default authSlice;