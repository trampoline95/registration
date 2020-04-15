import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import FormDialog from './Dialog'




const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      textAlign: 'center',
     
    },
    rootcard: {
        justifyContent: 'center'
       
    },
    rootmain: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(15),
      justifyContent: 'center',
    },
    typo: {
        flexDirection: 'row'
    },

  }));


 function Profile() {
    const classes = useStyles();
    
    return(
            <div className = {classes.rootmain}>
                 <Card className={classes.rootcard}>

                    <CardContent>

                 

                    <Grid container spacing={3}>
                        
                        <Grid item xs={6}>

                        <Box m ={3}>
                        <Paper className={classes.paper} >
                            <Box className={classes.Box}>
                            <Typography variant="subtitle1" >
                                Username : {localStorage.getItem('regUser')}
                            </Typography><FormDialog name="Username " />
                            </Box>
                            

                            <Typography variant="subtitle1">
                                Password : {localStorage.getItem('regPass')}<FormDialog name="Password "/>
                            </Typography>

                            <Typography variant="subtitle1">
                                Phone number : {localStorage.getItem('regPhn')}<FormDialog name="Phone number "/>
                            </Typography>

                            <Typography variant="subtitle1">
                                Email : {localStorage.getItem('regEmail')}<FormDialog name="Email "/>
                            </Typography>
                        </Paper>
                        </Box>
                        

                        </Grid>
                      
                    </Grid>

                    </CardContent>
                    
                    
                </Card>

               
            </div>

    );

}



export default Profile;