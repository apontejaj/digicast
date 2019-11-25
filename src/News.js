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
    const response = await fetch("http://2ec8f6ba-6bfe-4098-ace7-ee8eb1453f24.pub.cloud.scaleway.com/test/news_service_test?newsProvider=bbc-news");
    const forecast = await response.json();
    console.log(forecast);
    setForecast(forecast.news);
  }

  let component = [];
  
  for (var i = 0; i < forecast.length; i++){

    component.push(   
      <div>       
      <Typography variant="h5" component="h3">
        {forecast[i].title}
      </Typography>
      <Typography component="p">
        {forecast[i].content}
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