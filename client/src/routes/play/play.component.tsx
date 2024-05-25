import {wsSend} from '../../ws_utils/ws-play-connection';
import { playStartEvent } from '../../ws_utils/ws_api/build-event';

export const Play = () => {
    wsSend(playStartEvent("test"));
    
    return(
        <div>
            play
        </div>
    )
}