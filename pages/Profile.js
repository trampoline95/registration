import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormDialog from './Dialog'
import { useState } from 'react';




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
    }

  }));

 

  const doEdit =() =>{
    setIsopen(!isopen);
}


 function Profile() {
    const classes = useStyles();
    const [isopen,setIsopen] = useState(false);


    return(
            <div className = {classes.rootmain}>
                 <Card className={classes.rootcard}>

                    <CardContent>

                 

                    <Grid container spacing={3}>
                        
                        <Grid item xs={6}>
                        <Paper className={classes.paper}>
                         <form className={classes.root}>
                            <TextField id="outlined-basic" label="username" variant="standard" value= {localStorage.getItem('regUser')}/>
                            <TextField id="outlined-basic" label="password" variant="standard" value= {localStorage.getItem('regPass')}/>
                            <TextField id="outlined-basic" label="email" variant="standard" value= {localStorage.getItem('regEmail')}/>
                            <TextField id="outlined-basic" label="phone number" variant="standard" value= {localStorage.getItem('regPhn')}/>
                         </form>
                        </Paper>
                        </Grid>
                      
                    </Grid>

                    </CardContent>

                    <CardActions>
                        <Button>Edit</Button>
                    </CardActions>
                    <FormDialog  isopen={isopen} onEdit={doEdit}/>
                </Card>

               
            </div>

    );

}



export default Profile;