import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'users',
    initialState:
        {name: null, players: []},
    reducers: {
        signIn: (state, action) => {
            state.name = action.payload.name;
            state.players = action.payload.players;
        },
        signOut: (state, action) => {
            state.name = null;
            state.players = [];
        },
        updateUserList:(state,action) => {
            state.name = null;
            state.players = action.payload.players

        }
    }
})

export const {signIn, signOut, updateUserList} = userSlice.actions;

export const userReducer =  userSlice.reducer;