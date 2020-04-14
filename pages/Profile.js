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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
    },
    typo: {
        flexDirection: 'row'
    }

  }));

 

  const DialogOpener = () => {
      return <FormDialog/>
  }



 function Profile() {
    const classes = useStyles();
    
    return(
            <div className = {classes.rootmain}>
                 <Card className={classes.rootcard}>

                    <CardContent>

                 

                    <Grid container spacing={3}>
                        
                        <Grid item xs={6}>

                        <Paper className={classes.paper}>
                            <Typography variant="subtitle1">
                                Username : {localStorage.getItem('regUser')}<Box><Button onclick={DialogOpener}><ArrowDropDownIcon /></Button></Box>
                            </Typography>

                            <Typography variant="subtitle1">
                                Password : {localStorage.getItem('regPass')}<Box><Button onclick={DialogOpener}><ArrowDropDownIcon/></Button></Box>
                            </Typography>

                            <Typography variant="subtitle1">
                                Phone number : {localStorage.getItem('regPhn')}<Box><Button onclick={DialogOpener}><ArrowDropDownIcon/></Button></Box>
                            </Typography>

                            <Typography variant="subtitle1">
                                Email : {localStorage.getItem('regEmail')}<Box><Button onclick={DialogOpener}><ArrowDropDownIcon/></Button></Box>
                            </Typography>
                        </Paper>

                        </Grid>
                      
                    </Grid>

                    </CardContent>
                    
                </Card>

               
            </div>

    );

}



export default Profile;