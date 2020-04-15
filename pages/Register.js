import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router'



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      justifyContent: 'center',
     
    },
    rootcard: {
        justifyContent: 'center'
       
    },
    rootmain: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20ch',
          },
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(15),
      justifyContent: 'center',
    }

  }));


 function Register() {
    const classes = useStyles();

    const [User, setUser] = useState("");
    const [Pass, setPass] = useState("")
    const [Phn, setPhn] = useState("")
    const [Email, setEmail] = useState("")

    const storeData = () => {
        localStorage.setItem('regUser',User)
        localStorage.setItem('regPass',Pass)
        localStorage.setItem('regPhn',Phn)
        localStorage.setItem('regEmail',Email)
        Router.push("/Profile")
    }

  
    return(
            <div className = {classes.rootmain}>
                 <Card className={classes.rootcard}>

                    <CardContent>

                 

                    <Grid container spacing={3}>
                        
                        <Grid item xs={6}>
                        <Paper className={classes.paper}>
                         <form className={classes.root}>
                            <TextField id="outlined-basic" label="username" variant="standard" onChange = {(event) => setUser(event.target.value)} style={{padding: 10}}/>
                            <TextField id="outlined-basic" label="password" variant="standard" onChange = {(event) => setPass(event.target.value)} style={{padding: 10}}/>
                            <TextField id="outlined-basic" label="email" variant="standard" onChange = {(event) => setEmail(event.target.value)} style={{padding: 10}}/>
                            <TextField id="outlined-basic" label="phone number" variant="standard" onChange = {(event) => setPhn(event.target.value)} style={{pading: 10}}/>
                         </form>
                        </Paper>
                        </Grid>
                      
                    </Grid>

                    </CardContent>

                    <CardActions>
                        <Button onClick ={storeData}>Register</Button>
                    </CardActions>

                </Card>

               
            </div>

    );

}



export default Register;