import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'users',
    initialState:
        {id: null, players: []},
    reducers: {
        signIn: (state, action) => {
            state.id = action.payload.id;
            state.players = action.payload.players;
        },
        signOut: (state, action) => {
            state.id = null;
            state.players = [];
        },
        updateUserList:(state,action) => {
            state.players = action.payload.players

        }
    }
})


export const inviteSlice = createSlice({
    name: 'invite',
    initialState:
    { isShown: false, opponentName: null, opponentId: null},
    reducers: {
        receiveInvite: (state, action) => {
            state.isShown = true;
            state.opponentName = action.payload.opponentName;
            state.opponentId = action.payload.opponentId;
        },
        closeInvite: (state, action) => {
            state.isShown = false;
            state.opponentName = null;
            state.opponentId = null;
        }
    }
})

export const {signIn, signOut, updateUserList} = userSlice.actions;
export const {receiveInvite} = inviteSlice.actions;
//export invite reducer!!
export const userReducer =  userSlice.reducer;
export const inviteReducer = inviteSlice.reducer;