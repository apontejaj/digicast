import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    
  },
  card: {
    //maxWidth: 345,
    height: '33.33%',
  },
  
}));

function PaperSheet(props) {

  const location = "lat="+props.lat+"lon+"+props.long;
  const classes = useStyles();

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
      call();
  },[]);

  async function call() {
    const response = await fetch("http://localhost/test/forecast_three_weather_service_test?"+location);
    const forecast = await response.json();
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
    <Card className={classes.card}>
    <CardActionArea>
      <CardContent>

        {component}

      </CardContent>
    </CardActionArea>
  </Card>

  );

}

export default PaperSheet;