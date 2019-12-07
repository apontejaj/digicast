import React, {useEffect, useState} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    //maxWidth: 345,
    //maxHeight: 200,
    height: '33.33%',
  },
  media: {
    height: 150,
  },
  
});

function App(props) {

  const location = "lat="+props.lat+"lon+"+props.long;
  const classes = useStyles();

  const [weather, setWeather] = useState([{icon:null}]);

  useEffect(() => {
    call();
  }, []);

  async function call() {
    const response = await fetch("http://localhost/test/current_weather_service_test?" + location);
    const weather = await response.json();
    // console.log(weather);
    setWeather(weather.weather);
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={weather.icon}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {weather.temperature} °C / {weather.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
            {weather.clouds}% Cloud Coverage
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default App;

