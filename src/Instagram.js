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
    height: "100%",
  },
  media: {
    height: "100%",
  },
  
});

function App(props) {

  const sHandler = props.handler;  
  const classes = useStyles();

  const [pics, setPics] = useState([{imageUrl:null}]);

  useEffect(() => {
    call();
  }, []);

  async function call() {
    const response = await fetch("http://localhost/test/latest_insta?id="+sHandler);
    const bladybla = await response.json();
    setPics(bladybla.data);  
  }



  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pics[0].imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            @{sHandler} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

 
}

export default App;

