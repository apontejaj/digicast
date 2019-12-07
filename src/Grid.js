import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    //padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '33.33%',
  },
  stickToBottom: {
    width: '100%',
    height: '15%',
    position: 'fixed',
    bottom: 0,
  },
  top:{
    position: 'fixed',
    width: '100%',
    height: '85%',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  var layout = {
    main: "Instagram",
    sideTop: "Forecast",
    sideMid: "Current",
    sideBot: "Quiz",
    logo: 'https://careersnews.ie/wp-content/uploads/2019/01/TUD_RGB-1024x645.png',
  }

  function layoutManager(element){
    if(element === "Forecast"){
      return <Forecast />
    }
    if(element === "Current"){
      return <CurrentWeather />
    }
    if(element === "Quiz"){
      return <Quiz />
    }
    if(element === "Instagram"){
      return <Instagram handler="apontejaj"/>
    }
    if(element === "Rtps"){
      return <Rtps stopid="6282"/>
    }
  }

  const main = layoutManager(layout.main);
  //const main = <News source="bbc-news"/>;
  const sideTop = layoutManager(layout.sideTop);
  const sideMid = layoutManager(layout.sideMid);
  const sideBot = layoutManager(layout.sideBot);
  const logo = layoutManager(layout.logo);

  return (
    <div className={classes.root}>
      <Grid container className={classes.top}>

        <Grid item xs={9} height='100%'>
          {/* {main} */}
        </Grid>
        <Grid item xs={3} height="100%">
          {/* {sideTop} */}
          {/* {sideMid} */}
          {sideBot}

        </Grid> 
      
      </Grid>

      {/* this section here */}
      <Grid container className={classes.stickToBottom}>  
          <Grid item xs={3}>
              <Clock />
          </Grid>
          <Grid item xs={6} heigh='100%'>
              <News source="bbc-news"/>
          </Grid>
          <Grid item xs={3}>

              <Logo logo={layout.logo}/>
          </Grid>
      </Grid> 
    </div>
   
  );
}