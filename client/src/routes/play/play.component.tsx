import { Button } from '@mui/material';
import {wsSend} from '../../ws_utils/ws-play-connection';
import { playStartEvent } from '../../ws_utils/ws_api/build-event';
import { useState } from 'react';
import { SignIn } from '../../components/sign-in/sign-in.component';
import './play.styles.scss'

const appendLogs = (prevLogs:string, newLog:string) => {
    return prevLogs.concat('\n', newLog);
}


export const Play = () => {
    //wsSend(playStartEvent("test"));
    const [logs, logsSet] = useState('');


    return(
       
            <div className='play-block'>
           <div> <textarea id="logs_box" value={logs}/></div>
           <SignIn></SignIn>
            </div>
    )
}