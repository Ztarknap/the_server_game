import './player-list.styles.scss'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { wsSend } from '../../ws_utils/ws-play-connection';
import {inviteEvent} from '../../ws_utils/ws_api/build-event'
import { useSelector } from 'react-redux';
 

export const PlayerList = (user:any) => {
    console.log('dfsdf', user);
    const users = useSelector((state:any) =>  {return state.users}); 
    const handleGameInvite = (event:any, opponentId: string) => {
        console.log(event, ' aaa '); 
        wsSend(inviteEvent(users.id, opponentId));
        
    }
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="main mailbox folders">

          {user.players.map((player:any) => {
                return(
          
                     <ListItemButton key={player.id}
              onClick={(event) => handleGameInvite(event, player.id)}
            >
                 {player.user}
            </ListItemButton>
                    
                )
            })}
            
            
          </List>
            
        </Box>
      );
}