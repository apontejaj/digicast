import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 10,
      quiz: null,
      choice:null,
      loaded:false
    };
  }

  async componentDidMount() {
    //get first question
    await this.getQuiz()
  }

  async getQuiz() {
    const res = await fetch('http://localhost/test/quiz_service_test');
    const q = await res.json();
    // const q = {question: "Question",
    //             incorrect_answers:["Test1", "Test2", "Test3"],
    //             correct_answer: "Answer"}
    
    //set loaded and answer index
    console.log(q);
    this.setState({quiz:q, loaded:true, choice : Math.floor((q.incorrect_answers.length+1) * Math.random())});

    //set timer after question has loaded
    this.interval = setInterval(()=>{
      if(this.state.counter > -5){
        this.setState({counter: this.state.counter-1})
      }
    }, 1000)
  }

  //my own functions
  convertSTR(input) {
    let text = input;
    if(text)
    { //TODO: decode string instead of hardcode changes
      text = text.replace(/&quot;/g,'"');
      text = text.replace(/&eacute;/g,'é');
      text = text.replace(/&#039;/g,'\'');
      text = text.replace(/&amp;/g,'&');
      text = text.replace(/&shy;/g,'-');
      text = text.replace(/&lt;/g,'<');
      text = text.replace(/&gt/g,'>');
      text = text.replace(/&deg;/g,'º');
    }

    return text
  }

  //only return if exists
  getQuestion(){
    if(this.state.quiz){
      return this.state.quiz.question;
    }
    return null;
  }
  getAnswer(){
    if(this.state.quiz){
      return this.state.quiz.correct_answer;
    }
    return null;
  }

  mapAnswers(){
    if(this.state.quiz) {
      //print choices pased on answer position
      let ans = this.state.quiz.incorrect_answers.map((x, i) =>{

        //print answer in last place
        if((i === (this.state.quiz.incorrect_answers.length-1)) && this.state.choice > i) {
          return <div key={this.state.quiz.correct_answer}>{this.convertSTR(x)}<br/>{this.convertSTR(this.state.quiz.correct_answer)}</div>
        }
        //print answer in it's position
        else if(i === this.state.choice) {
          return <div key={this.state.quiz.correct_answer}>{this.convertSTR(this.state.quiz.correct_answer)}<br/>{this.convertSTR(x)}</div>
        }
        //print as normal
        return<div key={x}>{this.convertSTR(x)}</div>
      })
      return ans;
    }
    return null;
  }

  display(){

    const classes = makeStyles({
      card: {
        //minWidth: 275,
        height: "50%",
        width: '50%',
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
    {  
      
      if(this.state.counter > 0){                                   //display quiz
        return(
          <Card className={classes.card}>
            <CardContent>
              <div>
              <Typography variant="h5" component="h2" data-jsondata="@key">
                {this.convertSTR(this.getQuestion())}
              </Typography>
              
              <div style={{float:"right"}}><h1>{this.state.counter}</h1></div>
              {this.mapAnswers()}

              </div>
              
            </CardContent>
          </Card>
        )
      } 
      else {                                                     //display answer
        //5 seconds after hitting 0, refresh the page
        if(this.state.counter === -5)
          this.refresh();

        //this is how to display the quiz answer
        return(
          <Card className={classes.card}>
          
            <CardContent>
              <div>
              <Typography variant="h5" component="h2" data-jsondata="@key">
                {this.convertSTR(this.getAnswer())}
              </Typography>

              </div>
            
            </CardContent>
          </Card>
        )}}
        
        //if not displaying anything play the loading bar
        return <CircularProgress />
  }

  
  async refresh(){
    this.setState({counter: 10, choice:null,loaded:false});
    clearInterval(this.interval);
    await this.getQuiz();
  }

  render(){
    return(
    this.display()
  )};
}

export default App;

    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         {this.state.counter}
    //         {this.state.quiz}
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    // </div>