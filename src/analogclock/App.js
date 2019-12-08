// Code examples followed from the github
// https://github.com/vishnuramana/analogclock
// using the package 
// npm install --save analog-clock-react

import React, { Component } from 'react';
//import Form from './Form';
import AnalogClock from './AnalogClock'
import { textAlign, height } from '@material-ui/system';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        //width: "300px",
        width: "600px",
        textAlign: 'center',
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#ffffff",
        centerColor: "#459cff",
        handColors: {
          second: "#28a745",
          minute: "#007bff",
          hour: "#dc3545"
        },
      }
    };
    this.customizeClock = this.customizeClock.bind(this);
  }

  customizeClock(options) {
    this.setState({ options: { ...options } });
  }

  render() {

    return (
      <div>
          <Box mt={5} ml={'25%'} bgcolor="background.paper">

            <AnalogClock {...this.state.options} />
          </Box>
      </div>
    );

  }
}

export default App;