import { configureStore, Tuple} from '@reduxjs/toolkit';
import {userReducer, inviteReducer, playSessionReducer} from './slices';


export default configureStore({
    reducer: {
        users: userReducer,
        invite: inviteReducer,
        playSession: playSessionReducer
    },
     
})