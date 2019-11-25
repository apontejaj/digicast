import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function PaperSheet() {
  const classes = useStyles();

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    call();
  });

  async function call() {
    const response = await fetch("http://localhost/test/forecast_three_weather_service_test?lat=36.96&lon=122.02");
    //const response = await fetch("http://localhost:1337/test/forecast_seven_weather_service_test?lat=36.96&lon=122.02");
    const forecast = await response.json();
    console.log(forecast);
    setForecast(forecast.forecast);
  }

  let component = [];
  
  for (var i = 0; i < forecast.length; i++){

    let date = forecast[i].date.toString().charAt(6) + forecast[i].date.toString().charAt(7) +
    '/' + forecast[i].date.toString().charAt(4) + forecast[i].date.toString().charAt(5);

    component.push(   
      <div>       
      <Typography variant="h5" component="h3">
        {date} - {forecast[i].weather}
      </Typography>
      <Typography component="p">
        {forecast[i].temp2m.min} °C / {forecast[i].temp2m.max} °C
      </Typography>
      </div>
    );
  }

  return (
    <div>
      <Paper className={classes.root}>
        {component}
      </Paper>
    </div>
  );

}

export default PaperSheet;