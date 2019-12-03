import React, { Component } from 'react';
import RenderRow from './RenderRow'
import axios from 'axios'
import '../assets/st.css'
import styled from 'styled-components'


export default class QuestionNum extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        pollData: [],
        qId: 1,
      }

      this.handleClick = this.handleClick.bind(this);
    }

handleClick(e){
  this.setState({
    qId : e
  })
  alert(this.state.qId)
}

componentDidMount(){
    axios.get(`http://localhost:3002/takePoll`)
    .then(res => {  
        console.log(res)
        const pollData = res.data;
        this.setState({ pollData }); 
    })
    .catch(error => 
      console.log("error:", error))
  }

  render() {      
    return (
        <Flex>
        {this.state.pollData.map(function(item, key) {
             return (
            <div>
            <QuestionNumber onClick={this.handleClick(item.questionId)} >{item.questionId}</QuestionNumber>
            </div>
              )})}
        </Flex>
    )
  }
}


const Flex = styled.div`
display:flex;
flex-direction: row;
flex-wrap: nowrap;
right:25%;
left:50%;
margin-left:-200px;
margin-top: 70px;
`

const QuestionNumber = styled.button`
justify-content: flex-start;
width: 38px;
height: 38px;
border:none;

background: #8A9AF4;
border-radius: 31px;
margin-left: 10px;

font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 20px;
text-align: center;
letter-spacing: 0.2px;
color: #FFFFFF;
`
