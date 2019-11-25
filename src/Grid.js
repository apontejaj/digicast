import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import App from './App';
import News from './News';
import Forecast from './Try';
import Logo from './Logo';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={9}>
            <Grid>
                {/* <Paper className={classes.paper}>xs=12</Paper>  */}
                <News />
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Grid>
            <App />
                {/* <Paper className={classes.paper}>xs=12</Paper> */}
            </Grid>
            <Grid>
            <Forecast />
                
                {/* <Paper className={classes.paper}>xs=12</Paper> */}
            </Grid>
            <Grid>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
        </Grid>        
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.paper}>Eli and Amilcar</Paper>
        </Grid>
        <Grid item xs={3}>
            <Logo />
            {/* <Paper className={classes.paper}>xs=12</Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}