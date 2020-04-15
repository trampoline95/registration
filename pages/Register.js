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
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', 
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },

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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
                <div className = {classes.paper}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>



                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="UserName"
                            variant="outlined"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            autoFocus
                            onChange = {(event) => setUser(event.target.value)}
                        />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Password"
                            name="password"
                            autoComplete=""
                            onChange = {(event) => setPass(event.target.value)} 
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="Email"
                            label="Email"
                            type="Email"
                            id="Email"
                            autoComplete=""
                            onChange = {(event) => setEmail(event.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="Phn"
                            label="Phone"
                            type="Phone"
                            id="Phone"
                            autoComplete=""
                            onChange = {(event) => setPhn(event.target.value)}
                        />
                        </Grid>
                    
                         </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick ={storeData}
                        >
                        Register
                        </Button>
                       
                   
                </form>

               
            </div>
        </Container>
            

    );

}



export default Register;