import { Button } from '@mui/material';
 
import { refreshPlayersEvent } from '../../ws_utils/ws_api/build-event';
import { useEffect, useState } from 'react';
import { SignIn } from '../../components/sign-in/sign-in.component';
import { PlayerList } from '../../components/player-list/player-list.component';
import {Invite} from '../../components/invite/invite.component'
import { PlayField } from '../../components/play-field/play-field.component';
import { signIn, receiveInvite, updateUserList } from "../../redux/slices"
import { useDispatch, useSelector } from "react-redux";
import { wsConnection } from '../../ws_utils/ws-play-connection';
import { wsSend } from '../../ws_utils/ws-play-connection';
import './play.styles.scss'
const appendLogs = (prevLogs:string, newLog:string) => {
    return prevLogs.concat('\n', newLog);
}

export const Play = () => {
     
    const [logs, logsSet] = useState('');
    const dispatch = useDispatch();
    const users = useSelector((state:any) =>  {return state.users});
    const invite = useSelector((state:any) => {return state.invite})
    const playSessionMeta = useSelector((state:any) => {return state.playSessionMeta});
    console.log('play rerender ', users);
 
    wsConnection.onerror = (error:any) => {
        console.log("Error " + error.message);
    };
    wsConnection.onmessage =  (msg: any) => {
        const msgJSON = JSON.parse(msg['data']);
        if (msgJSON.payload.status == 0) {
            switch(msgJSON.event) {
                case 'login': {
                    dispatch(signIn({id: msgJSON.payload.id, players: msgJSON.payload.clients}));
                    logsSet('logged in as ' + msgJSON.payload.id);
                    break;
                }
                case 'invite': {
                     dispatch(receiveInvite({opponentName: msgJSON.payload.opponentName, opponentId: msgJSON.payload.opponentId}));
                     break;
                }
                case 'refreshInvite': {
                    dispatch(updateUserList({id: msgJSON.payload.id, players: msgJSON.payload.clients}))
                    break;
                }
                case 'keepAlive': {
                    wsSend(JSON.stringify({event:"keepalive", payload: {isAlive: true}}));
                    break;
                }

                case 'startGame': {
                    console.log('startgame');
                    break;

                }

                default: {
                    alert(msgJSON.payload.msg);
                }


            }
        }

      }

    const handleInviteRefresh = () => {
        wsSend(refreshPlayersEvent(users.id));
    }
        const handleAccept = (event:any) => {
        console.log('accept')
    }

    return(
         
            <div className='play-block'>
           <div> <textarea id="logs_box" value={logs}/></div>
           <div id='sign-in-btn'>{users.id?"":<SignIn></SignIn>}</div>
           <div> {users.id? <Button id="invite-refresh-btn" variant="contained" color='secondary' onClick={handleInviteRefresh}> Refresh player list</Button>:""}</div>
           <div id='invite-popup'>{invite.isShown?<Invite></Invite>:""}</div>
           {users.id?<PlayerList {...users}></PlayerList>:""}
            </div>
    )
}