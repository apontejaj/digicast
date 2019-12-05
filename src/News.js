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
    height: 150,
  },
}));

function PaperSheet(props) {

  const source = props.source;
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    call();
  });

  async function call() {
    const response = await fetch("http://localhost/test/news_service_test?newsProvider=" + source);
    const news = await response.json();
    setNews(news.news);

  }

  let component = [];

  for (var i = 0; i < news.length/news.length; i++){
  
    component.push(   
      <div>       
      <Typography variant="h5" component="h3">
        {news[0].title}
      </Typography>
      <Typography component="p">
        {news[i].content}
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