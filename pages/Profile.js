import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormDialog from './Dialog'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';



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
  }));

  const [User, setUser] = useState("");
  const [Pass, setPass] = useState("")
  const [Phn, setPhn] = useState("")
  const [Email, setEmail] = useState("")


 function Profile() {
    const classes = useStyles();

    useEffect = () => {
        const User = setUser(localStorage.getItem('regUser'),[])
        const Pass = setPass(localStorage.getItem('regPass'),[])
        const Phn = setPhn(localStorage.getItem('regPhn'),[])
        const Email = setEmail(localStorage.getItem('regEmail'),[])
    }
    
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
                <div className = {classes.paper}>
                <Typography component="h1" variant="h5">
                    Profile Details
                </Typography>

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <Typography >
                            Username : {userData}
                        </Typography>
                            <FormDialog name="Username " />
                        </Grid>

                        <Grid item xs={12}>
                        <Typography >
                            Password : {passData}
                        </Typography>
                            <FormDialog name="Password "/>
                         </Grid>

                        <Grid item xs={12}>
                        <Typography >
                            Phone number : {phnData}
                        </Typography>
                            <FormDialog name="Phone number "/>
                        </Grid>

                        <Grid item xs={12}>
                        <Typography >
                            Email : {emailData}
                        </Typography>
                            <FormDialog name="Email "/>
                        </Grid>
                 </Grid>
                 </form>

               
            </div>
        </Container>
            

    );

}



export default Profile;