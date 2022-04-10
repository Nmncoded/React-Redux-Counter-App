import React from 'react';
import { render } from "react-dom";
import './stylesheets/style.css'
import store from './store/countReducer';
import {Provider} from 'react-redux';
import Counter from './components/counter';
let root = document.getElementById(`root`);


function App(props){

  return(
    <Counter />
  )
}


render(
  <Provider store={store} >
    <App />
  </Provider>
, root);

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      steps: 1,
      maxValue: Infinity,
    };
  }
  handleIncrement = () => {
      
      if (this.state.steps !== 1) {
      this.setState({
        count: this.state.count  + this.state.steps <= this.state.maxValue ? this.state.count + this.state.steps : this.state.count,
      });
    } else {
      this.setState({
        count: this.state.count  + this.state.steps <= this.state.maxValue ? this.state.count + 1 : this.state.count , 
      });
    }
  };
  handleDecrement = () => {
    if (this.state.steps !== 1) {
      this.setState({
        count: this.state.count - this.state.steps,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  handleReset = () => {
    this.setState({
      count: 0,
      steps: 1,
      maxValue: Infinity,
    });
  };
  handleSteps = (value = 1) => {
    this.setState({
      steps: value,
    });
  };
  handleMaxValue = (value = 0) => {
    this.setState({
      maxValue: value,
    });
  };
  render() {
    return (
      <>
        <header className="header">{this.state.count}</header>
        <div className="values">
          <div className="steps-value">
          <p className="p">Steps</p>
          <div className="step-btns">
            {
              [5,10,15].map(value => <button className={(this.state.steps === value) ? 'active' : ""} onClick={() => this.handleSteps(value)}>{value}</button>)
            }
          </div>
        </div>
        <div className="max-value">
          <p className="p">Max Value</p>
          <div className="step-btns">
            {
              [15,100,200].map(value =><button className={(this.state.maxValue === value) ? 'active' : ""}  onClick={() => this.handleMaxValue(value)}>{value}</button> )
            }
          </div>
        </div>
      </div>
        <div className="inc-dec-btns">
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </>
    );
  }
} */

