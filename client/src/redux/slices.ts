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

export const playSessionMetaSlice = createSlice({
    name: 'playSessionMeta',
    initialState:
    { 
     active: false, 
     opponentName:null, 
     opponentId: null
    },
    reducers: {
        startSession: (state, action) => {
            state.active = true;
            state.opponentName = action.payload.opponentName;
            state.opponentId = action.payload.opponentId;
        },
        closeSession: (state, action) => {
            state.active = false;
            state.opponentName = null;
            state.opponentId = null;
        }
    }
})

export const playSession = createSlice({
    name: 'playSession',
    initialState:
    {
     turnPlayerId: null, 
     round: null, 
     holeCards: null,
     communityCards: null,
     specialEffects: null,
     opponentSpecialEffects: null,
     fold: false,
     currentBet: null,
     currentBlind: null
    },
    reducers: {
        startGame: (state, action) => {
            state.turnPlayerId = action.payload.turnPlayerId; 
            state.round = action.payload.round;
            state.holeCards = action.payload.holeCards;
            state.communityCards = action.payload.communityCards;
            state.specialEffects = action.payload.specialEffects;
            state.opponentSpecialEffects = action.payload.opponentSpecialEffects;
            state.fold = false;
            state.currentBet = action.payload.currentBet;
            state.currentBlind = action.payload.currentBlind;
        }
    }
});

export const visualSessionSlice= createSlice({
    name: 'visualSession',
    initialState: {
        cardShown: null
    },
    reducers: {

    }
})
export const {signIn, signOut, updateUserList} = userSlice.actions;
export const {receiveInvite, closeInvite} = inviteSlice.actions;

export const {startSession, closeSession} = playSessionMetaSlice.actions;
 
export const userReducer =  userSlice.reducer;
export const inviteReducer = inviteSlice.reducer;
export const playSessionReducer = playSessionMetaSlice.reducer;
