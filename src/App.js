import React from 'react';
import Questions from './components/Questions';
import data from './questions.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="title">
            <h1>Serious questions</h1>
          </div>
          <Questions questions={data.questions}/>
        </div>
      </div>
    );
  }
}

export default App;
