import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1-- Constructor (Mounting)');
  }

  //Mounting
  componentDidMount() {
    console.log('3-- componentDidMount (Mounted)');
  }

  //Updating
  componentDidUpdate(prevProps, prevState) {
    console.log('4-- componentDidUpdate (Updated)');
    console.log('Previous State:', prevState.count);
  }

  //Unmounting
  componentWillUnmount() {
    console.log('5-- componentWillUnmount (Unmounted)');
  }

  //Error Handling (used in Error Boundaries)
  componentDidCatch(error, info) {
    console.log('6-- componentDidCatch (Error Handling)', error, info);
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('2-- Render');
    return (
      <div>
        <h2>React Lifecycle (Class Component)</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default LifecycleExample;
