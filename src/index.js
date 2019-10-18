import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./assets/style.css";
import QuestionBox from './components/QuestionBox'
import "./assets/style.css";
import axios from 'axios';

class Questions extends Component{
    state = {
        questionBank: []
    }
     
    componentDidMount(){
        axios.get(`http://localhost:3000/qBank`)
        .then(res => {
            console.log(res)
            this.setState({questionBank: res.data});
        })
    }
    render(){
        return (
            <div className = 'container'>
                <div className = "title">Questions</div>
                {this.state.questionBank.map(({question, answers, questionId}) => (<QuestionBox 
                     question = {question} 
                     options = {answers}
                     key = {questionId}
                    />))}
            </div>
        )
    }
}
ReactDOM.render(<Questions />, document.getElementById('root'));
