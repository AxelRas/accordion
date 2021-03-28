import React from 'react';
import Questions from './components/Questions';
import data from './questions.json';
import $ from 'jquery';

if($(window).height() > $(".App").height()) {
  $("html").css({"align-items": "center"});
} else {
  $("html").css({"align-items": "flex-start"});
}

$( window ).bind("resize", function(){
  if($(window).height() > $(".App").height()) {
    $("html").css({"align-items": "center"});
  } else {
    $("html").css({"align-items": "flex-start"});
  }
});


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
