import React, { useEffect, useState } from 'react';
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
import { callExpression } from '@babel/types';

let oWidget;
let main;
let sideOne;
let sideTwo;
let sideThree;
let logo;

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

export default function CenteredGrid(props) {

  const sCastId = props.sCastId;
  const classes = useStyles();
  const [cast, setCast] = useState({widgets: []});

  useEffect(()=>{
    call();
  }, []);

  async function call() {
    const response = await fetch("http://localhost/cast/data/" + sCastId);
    const json = await response.json();
    setCast(json);
    
  }

  for(var i = 0; i < cast.widgets.length; i++){
    
    oWidget = cast.widgets[i];
    
    if(oWidget.position === "main"){
      main = layoutManager(oWidget);
    }
    else if(oWidget.position === "sideOne"){
      sideOne = layoutManager(oWidget);
    }
    else if(oWidget.position === "sideTwo"){
      sideTwo = layoutManager(oWidget);
    }
    else if(oWidget.position === "sideThree"){
      sideThree = layoutManager(oWidget);
    }
  }

  function layoutManager(oWidget){
    if(oWidget.user_widget_id.widget_id === "YOUTUBE"){
      return "YouTube will go here";
    }
    else if(oWidget.user_widget_id.widget_id === "WEATHER"){
      // This data is going to come from the api
      return <CurrentWeather lat={36.96} long={122.02}/>
    }
    else if(oWidget.user_widget_id.widget_id === "FORECAST"){
      // This data is going to come from the api
      return <Forecast lat={36.96} long={122.02}/>
    }
    else if(oWidget.user_widget_id.widget_id === "TRIVIA"){
      return <Quiz />
    }
    // else if(oWidget.user_widget_id.widget_id === "INSTAGRAM"){
    //   return <Instagram handler={oWidget.user_widget_id.api_param}/>
    // }
    else if(oWidget.user_widget_id.widget_id === "TRAVEL"){
      return <Rtps stopid={oWidget.user_widget_id.api_param}/>
    }
    else if(oWidget.user_widget_id.widget_id === "CLOCK"){
      // to do
    }
    else if(oWidget.user_widget_id.widget_id === "TWITTER"){
      //to do
    }
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.top}>

        <Grid item xs={9} height='100%'>
          {main}
        </Grid>
        <Grid item xs={3} height="100%">
          {sideOne}
          {sideTwo}
          {sideThree}

        </Grid> 
      
      </Grid>

      {/* this section here */}
      <Grid container className={classes.stickToBottom}>  
          <Grid item xs={3}>
              <Clock />
          </Grid>
          <Grid item xs={6} heigh='100%'>
              {/* <News source="bbc-news"/> */}
          </Grid>
          <Grid item xs={3}>

              <Logo logo={"https://careersnews.ie/wp-content/uploads/2019/01/TUD_RGB-1024x645.png"}/>
          </Grid>
      </Grid> 
    </div>
   
  );
}