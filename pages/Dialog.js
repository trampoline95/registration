import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from 'react';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

    const [User, setUser] = useState(localStorage.getItem('regUser'));
    const [Pass, setPass] = useState(localStorage.getItem('regPass'))
    const [Phn, setPhn] = useState(localStorage.getItem('regPhn'))
    const [Email, setEmail] = useState(localStorage.getItem('regEmail'))

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUser = (event) => {
    
    setUser(event.target.value)
  }

  const handleEmail = (event) => {
    
    setEmail(event.target.value)
  }

  const handlePhn = (event) => {
    
    setPhn(event.target.value)
  }

  const handlePass = (event) => {
    
    setPass(event.target.value)
  }

  const updateProfile = () =>{
    alert("Profile Updated Successfully")
    localStorage.setItem("regUser",User);
    localStorage.setItem("regEmail",Email);
    localStorage.setItem("regPass",Pass);
    localStorage.setItem("regPhn",Phn);
    
  }



  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <ArrowDropDownIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title"> Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Change your Username here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label= "Username"
            type="email"
            fullWidth
            onChange = {handleUser}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label= "Email"
            type="email"
            fullWidth
            onChange = {handleEmail}
          />

             <TextField
            autoFocus
            margin="dense"
            id="name"
            label= "Password"
            type="email"
            fullWidth
            onChange = {handlePass}
          />

             <TextField
            autoFocus
            margin="dense"
            id="name"
            label= "Phone Number"
            type="email"
            fullWidth
            onChange = {handlePhn}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateProfile} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}