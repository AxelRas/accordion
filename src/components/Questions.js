import React, { Component } from 'react';



export default class Questions extends Component {
    render() {
        return (
            <div className="questions">
                {this.props.questions.map(question => (
                    <div className="question-container">
                        <div className="question">
                            <p className="question">{question.q}</p>
                            <button onClick={}>+</button>
                        </div>
                        
                    </div>
                ))}
            </div>
        )
    }
}
