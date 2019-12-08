import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactHtmlParser from 'react-html-parser';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 10,
      questions:null,
      index:0,
      quiz: null,
      choice:null,
      loaded:false
    };

    //set timer after question has loaded
    this.qInterval = setInterval(()=>{
      this.setState({counter: this.state.counter-1})
    }, 1000);
  }

  async componentDidMount() {
    //get first question
    await this.getQuestions()
  }

  async getQuestions() {
    const res = await fetch('http://localhost/test/quiz_service_test');
    const q = await res.json();
    console.log(q);
    this.setState({
      questions:q,
      index:0
    });

    this.getQuiz();
  }

  getQuiz() {
    this.setState({
      quiz:this.state.questions[this.state.index],
      loaded:true,
      choice: Math.floor((this.state.questions[this.state.index].incorrect_answers.length+1) * Math.random())
    })
  }


  mapAnswers(){
    //print choices pased on answer position
    let ans = this.state.quiz.incorrect_answers.map((x, i) =>{

      //print answer in last place
      if((i === (this.state.quiz.incorrect_answers.length-1)) && this.state.choice > i) {
        return <div key={this.state.quiz.correct_answer}>{ReactHtmlParser(x)}<br/>{ReactHtmlParser(this.state.quiz.correct_answer)}</div>
      }
      //print answer in it's position
      else if(i === this.state.choice) {
        return <div key={this.state.quiz.correct_answer}>{ReactHtmlParser(this.state.quiz.correct_answer)}<br/>{ReactHtmlParser(x)}</div>
      }
      //print as normal
      return<div key={x}>{ReactHtmlParser(x)}</div>
    })
    return ans;
  }

  display(){
    const classes = makeStyles({
        card: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          float: "right",
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

    if(this.state.loaded)//only display after quiz is loaded
    {  if(this.state.counter > 0){                                   //display quiz
        return(
          <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" data-jsondata="@key">
              {ReactHtmlParser(this.state.quiz.question)}
            </Typography>
            <div style={{float:"right"}}><h1>{this.state.counter}</h1></div>
            {this.mapAnswers()}
          </CardContent>
        </Card>
      )} 
      else {                                                     //display answer
        //5 seconds after hitting 0, refresh the page
        if(this.state.counter < -3)
          this.refresh();

        //this is how to display the quiz answer
        return(
          <Card className={classes.card}>
            <CardContent>
            <Typography variant="h5" component="h2" data-jsondata="@key">
              {ReactHtmlParser(this.state.quiz.question)}
            </Typography>
              <Typography>
                {ReactHtmlParser(this.state.quiz.correct_answer)}
              </Typography>
            </CardContent>
          </Card>
        )}}
        
        //if not displaying anything play the loading bar
        return <div style={{float:"center"}}><CircularProgress /></div>
  }

  
  async refresh(){
    if(this.state.index < (this.state.questions.length-1))
    {
      this.setState({
        counter: 10,
        index: this.state.index+1
      });
      this.getQuiz();
    }
    else{
      await this.getQuestions();
    }
  }

  render(){
    return(
    this.display()
  )};
}

export default App;