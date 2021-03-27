import React, { Component } from 'react';
import $ from 'jquery';

function showAnswer(id, answer) {

    let content = $("#button-" + id).text();

    if(content === "+"){
        $("#question-container-" + id).append("<p id='answer-"+ id +"'>"+ answer +"</p>");
        $("#button-"+ id).empty();
        $("#button-"+ id).text("-");
    } else {
        $("#answer-" + id).remove();
        $("#button-"+ id).empty();
        $("#button-"+ id).text("+");
    }
}

export default class Questions extends Component {
    render() {
        return (
            <div className="questions">
                {this.props.questions.map(question => (
                    <div id={"question-container-" + question.id} key={"key" + question.id} className="question-container">
                        <div className="question">
                            <p className="question-text">{question.q}</p>
                            <button id={"button-" + question.id} onClick={() => {showAnswer(question.id, question.a)}}>+</button>
                        </div>
                        
                    </div>
                ))}
            </div>
        )
    }
}
