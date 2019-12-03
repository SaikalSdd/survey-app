import React, { Component } from 'react';
import RenderRow from './RenderRow'
import axios from 'axios'
import '../assets/st.css'
import styled from 'styled-components'


export default class QuestionUserName extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        pollData: [],
      }
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
        this.state.pollData.map(function(item, key) {
             return (
            <div>
        <UserName>{item.userName}</UserName>
            </div>
              )})
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