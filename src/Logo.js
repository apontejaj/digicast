import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    height: '100%',
    //maxWidth: 345,
  },
  media: {
    height: 100,
    
  },
  
});

function App(props) {

  const logo = props.logo;
  const classes = useStyles();

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

