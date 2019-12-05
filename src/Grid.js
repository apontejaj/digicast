import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CurrentWeather from './CurrentWeather';
import News from './News';
import Forecast from './Forecast';
import Logo from './Logo';
import Rtps from './Rtps';
import Instagram from './Instagram';
import Quiz from './Quiz';
import Clock from './Clock';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={9}>
            <Grid yu>
            <Instagram handler="leomessi" />
                {/* <Paper className={classes.paper}>xs=12</Paper>  */}
                
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Grid>
              
              <CurrentWeather />
              {/* <Paper className={classes.paper}>xs=12</Paper> */}
            </Grid>
            <Grid>
              {/* <Forecast /> */}
              {/* <Quiz /> */}
              <Instagram handler="leomessi" />
              {/* <Paper className={classes.paper}>xs=12</Paper> */}
            </Grid>
            <Grid>
              <Rtps stopid="6282"/>
              {/* <Paper className={classes.paper}>xs=6</Paper>   */}
            </Grid>
        </Grid> 
        <Grid container className={classes.stickToBottom}> 
          <Grid item xs={3}>
              <Clock />
              {/* <Paper className={classes.paper}>xs=12</Paper> */}
          </Grid>
          <Grid item xs={6}>
              <News source="bbc-news"/>
              {/* <Paper className={classes.paper}>xs=12</Paper> */}
          </Grid>
          <Grid item xs={3}>
              <Logo />
              {/* <Paper className={classes.paper}>xs=12</Paper> */}
          </Grid>
        </Grid>       
        
      </Grid>
    </div>
   
  );
}