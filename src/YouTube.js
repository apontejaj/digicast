import React, {Component} from 'react';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';

let SRC;

class App extends Component{

  constructor(props) {
    super(props)

    SRC = props.link;

    this.state = {
      SRC: null,
      loaded: false
    };
    //this.getURL()
  }

  // async getURL () {
  //   const res = await fetch('http://localhost:1337/test/youtube_service_test');
  //   const url = await res.json();
  //   this.setState({SRC:url, loaded:true})
  // }

  display() {
    // if(this.state.loaded)
    // {
      return(
        <iframe 
          width="100%" //height and width scale with the containing div
          height='100%' 
          src= {/*this.state.*/SRC + "?autoplay=1"}
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      )
    // }
    // return <CircularProgress />
  }

  render() {
    return (

        this.display()

    );
  }
}

export default App;
