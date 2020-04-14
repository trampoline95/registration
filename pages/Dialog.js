import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';

export default function FormDialog(props) {
    const [open, setOpen] = useState(false);
    const [User, setUser] = useState("");
    const [Pass, setPass] = useState("")
    const [Phn, setPhn] = useState("")
    const [Email, setEmail] = useState("")
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      props.onEdit()
    };

    const handleName = (e) => {
      setUser(e.target.value);
    };


    const handlePhoneNumber = (e) => {
      setPhn(e.target.value);
    };

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };

    const handlePassword =(e) => {
      setPass(e.target.value);
    };

    const updateProfile = () =>{
        alert("Profile Updated Successfully")
        localStorage.setItem('regUser',User)
        localStorage.setItem('regPass',Pass)
        localStorage.setItem('regPhn',Phn)
        localStorage.setItem('regEmail',Email)
        props.onEdit();
    }

    console.log(props)
  
    return (
      
        <Dialog open={props.isopen} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
          <DialogContent>
            
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="text"
              fullWidth
              onChange = {handleName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="phoneNumber"
              label="Phone Number"
              type="text"
              fullWidth
              onChange = {handlePhoneNumber}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="text"
              fullWidth
              onChange = {handleEmail}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange = {handlePassword}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={updateProfile} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      
    );
  }