import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.passResult = this.passResult.bind(this);
  }

  handleClick(buttonName) {
    const calculation = calculate(this.state, buttonName);
    this.setState(calculation);
  }

  passResult() {
    const { total, next, operation } = this.state;
    if (next) {
      return next;
    }
    return total;
  }

  render() {
    return (
      <div className="App">
        <Display result={this.passResult()} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
