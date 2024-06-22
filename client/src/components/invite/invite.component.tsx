import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Invite = () => {

    const handleDeny = (event:any) => {
        console.log('deny')
    }

    const handleAccept = (event:any) => {
        console.log('deny')
    }

    return(
        <div>
      <Dialog
        open={true}
        onClose={handleDeny}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            thats an invite
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeny}>Dent</Button>
          <Button onClick={handleAccept} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}