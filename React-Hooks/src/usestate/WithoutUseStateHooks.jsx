import React, { Component } from 'react';

class WithoutUseStateHooks extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      count: 0,
      step: 1,
    };
  }

  // Increase count by step
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + prevState.step,
    }));
  };

  // Decrease count by step
  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - prevState.step,
    }));
  };

  // Handle step change from input
  handleStepChange = (e) => {
    this.setState({
      step: Number(e.target.value),
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Step Counter App</h2>

        <h3>Count: {this.state.count}</h3>

        <button onClick={this.handleDecrement}>➖ Decrement</button>
        <button onClick={this.handleIncrement}>➕ Increment</button>

        <br /><br />

        <label>
          Set Step Value:&nbsp;
          <input type="number" value={this.state.step} onChange={this.handleStepChange} />
        </label>
      </div>
    );
  }
}

export default WithoutUseStateHooks;
