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
  },
  media: {
    height: 150,
  },
  
});

function App() {

  const classes = useStyles();

  const logo = 'https://careersnews.ie/wp-content/uploads/2019/01/TUD_RGB-1024x645.png';

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
        />
      </CardActionArea>
    </Card>
  );
}

export default App;

