import React, { Component } from 'react';
import RenderRow from './RenderRow'
import axios from 'axios'
import '../assets/st.css'
import styled from 'styled-components'

import threeDotsIcon from '../assets/images/three-dots.svg'
import profileImg from '../assets/images/profile-img.png'
import QuestionNum from './QuestionContent';
import QuestionUserName from './QuestionUserName';


export default class TakePollContent extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        pollData: [],
        qNum: 0,
      }
  }

componentDidMount(){
    axios.get(`http://localhost:3002/takePoll`)
    .then(res => {  
        console.log(res)
        const pollData = res.data;
        const qNum = res.data.length;
        this.setState({ pollData, qNum });
        console.log('polldata' + pollData)
    })
    .catch(error => 
      console.log("error:", error))
  }

  render() {      
    return (
        <div>
        <QuestionUserName />
        <QuestionNum />
        <QuestionType>{this.state.pollData.questionType}</QuestionType>
        </div>
    )
  }
}

const UserName = styled.h2`
margin: 32px 40px;
font-family: Muli;
font-style: normal;
font-weight: bold;
font-size: 19px;
line-height: 24px;

letter-spacing: 0.4px;

color: #353C64;
`
const QuestionType = styled.h4`
position: absolute;
height: 23px;
width: 100%;
text-align: center;
text-transform: uppercase;

font-family: Muli;
font-weight: 600;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #828282;
`