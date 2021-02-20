import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BARGuage } from './components/BARGuage';

class App extends React.Component {
  state = {
    rpmNow: 200
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ rpmNow: this.state.rpmNow + (Math.random() - 0.5) * 10 + 2 })
    }, 50)
  }

  render() {


    var speed = 0;
    var wheelRadius = 0.9;


    var mykar
    var maxRpm = 1000;
    var rpmNow = 200;


    return (
      <div style={{
        color: 'white',
        backgroundColor: 'black', height: 800,
        padding: 50
      }}>
        KAR DASHBOARD
        <BARGuage label="RPM" min={0} max={maxRpm} value={this.state.rpmNow} />
      </div>
    );
  }
}

export default App;
