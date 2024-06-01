import { Button } from '@mui/material';
import { useState } from 'react';
import {wsSend} from '../../ws_utils/ws-play-connection';
import { loginEvent } from '../../ws_utils/ws_api/build-event';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const SignIn = () => {
    const [openSign, setOpenSign] = useState(false);
    
    const handleClickOpenSign = () => {
        setOpenSign(true);
    };
  
    const handleCloseSign = () => {
        setOpenSign(false);
    };
    return(
        <div>
              <Button id="playButton" variant="contained" color='secondary' onClick={() => {handleClickOpenSign()}}> Play</Button>
              
              <Dialog
                open={openSign}
                onClose={handleCloseSign}
                PaperProps={{
                  component: 'form',
                  onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const login = formJson.login;
                    wsSend(loginEvent(login));
                    handleCloseSign();
                  },
                }}
              >
                <DialogTitle>Enter your name</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    enter your name plz
                  </DialogContentText>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="login"
                    label="Login"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseSign} color='secondary'>Cancel</Button>
                  <Button type="submit" color='secondary'>Enter</Button>
                </DialogActions>
              </Dialog>
        </div>
    )
}