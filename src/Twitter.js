import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

let TWITTERACOUNT;

class App extends Component{
  constructor(props) {
    super(props)

    TWITTERACOUNT = props.handler;

    this.state = {
      url: 'http://localhost/test/latest_tweets',
      respose: null,
      tweet:null,
      index:0,
      loaded: false
    }
  }

  async componentDidMount(){
    //get quiz
    await this.getTweets();

    this.interval = setInterval(()=>{
      if(this.state.loaded)
      {
        let i = (this.state.index + 1) % (this.state.respose.data.length);
        this.setState({index: i});
        this.getTweet();
      }
    },5000)//get new index every 5 seconds

    this.ajaxInterval = setInterval(async () => {
      await this.getTweets();
    },(10000*60));//every 10 mins get a new set of tweets
  }

  async getTweets() {
    const res = await fetch(this.state.url + '?id=' + TWITTERACOUNT);
    const q = await res.json();
    this.setState({respose:q});

    this.getTweet()
  }

  getTweet(){
    this.setState({
      tweet: this.state.respose.data[this.state.index],
      loaded:true
    });
  }

  render() {

    const classes =  makeStyles(theme => ({
      root: {
        padding: theme.spacing(3, 2),
      },
      card: {
        //maxWidth: 345,
        //height: '33.33%',
      },
    }));
    // const classes = makeStyles({
    //   card: {
    //     //maxWidth: 345,
    //     height: '33.33%',
    //   },
    //   bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    //   },
    //   title: {
    //     fontSize: 14,
    //   },
    //   pos: {
    //     marginBottom: 12,
    //   },
    // });

    if(this.state.loaded) {
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h3">
              <div style={{float:"left"}}><TwitterIcon color="primary" fontSize="large"/></div>
              {this.state.tweet.text}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {this.state.tweet.createdAt}
            </Typography>
          </CardContent>
        </Card>
      );
    }

    return(
      <div style={{float:"center"}}><CircularProgress /><br/>"...Getting tweets..."</div>
    )
  }

  componentWillUnmount(){
    clearInterval(this.interval);
    clearInterval(this.ajaxInterval);
  }
}

export default App;
