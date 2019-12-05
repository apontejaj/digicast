import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';

class App extends Component{
  constructor() {
    super()
    let today = new Date()
    this.state = {
      hours: today.getHours(),
      minutes: today.getMinutes(),
      seconds: today.getSeconds()
    }
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      this.setState({seconds: this.state.seconds+1})
      this.manage()
    },1000)
  }

  manage(){
    if(this.state.seconds === 60){
      this.setState({minutes: this.state.minutes + 1, seconds: 0})
    }
    if(this.state.minutes === 60){
      this.setState({hours: this.state.hours + 1, minutes: 0})
    }
    if(this.state.hours === 24){
      this.setState({hours: 0})
    }    
  }
  render(){
    return (
      <div className="App">
        <Typography variant="h1">
          {("0"+this.state.hours).slice(-2)}:
          {("0"+this.state.minutes).slice(-2)}:
          {("0"+this.state.seconds).slice(-2)}
        </Typography>
      </div>
    );
  }
}

export default App;
