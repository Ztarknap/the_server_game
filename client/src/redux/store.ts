import { configureStore, Tuple} from '@reduxjs/toolkit';
import {userReducer, inviteReducer} from './slices';
//import { wsMiddleware } from '../middleware/middleware';
 

export default configureStore({
    reducer: {
        users: userReducer,
        invite: inviteReducer
    },
    //middleware: () => {return new Tuple(wsMiddleware(new WebSocket("ws://localhost:3001")))},
})