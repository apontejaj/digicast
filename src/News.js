import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  card: {
    //maxWidth: 345,
    height: '100%',
  },
}));

function PaperSheet(props) {

  const source = props.source;
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {

      if(counter === 0){
        call();
      }
      
      setTimeout(() =>{

        if(counter === 10){
          setCounter(0);
        }
        else {
          setCounter(counter + 1);
        }

      }, 5000);
    
  }, [counter]);


  async function call() {
    const response = await fetch("http://localhost/test/news_service_test?newsProvider=" + source);
    const json = await response.json();
    setNews(json.news);
  }

  let component;
  
  if(counter === 0){
    component =  <CircularProgress />
    
    setTimeout(()=>{
      setCounter(1);
    },3000);
  }
  else {
    setComponent();
  }

  function setComponent() {
    component = 
      <div>       
      <Typography variant="h5" component="h3">
        {news[counter - 1].title}
      </Typography>
      <Typography component="p">
        {news[counter - 1].content}
      </Typography>
      </div>

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