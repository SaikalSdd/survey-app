import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import {PollsContainer} from './MyPolls'
import TakePollContent from './TakePollContent';


const Title = styled.h2`
position: absolute;
width: 100%;
margin-top: 26px;
margin-bottom: 101px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;

text-align: center;
color: #6A6A6A;
`

export default class AllPolls  extends React.Component {
/*     constructor(props){
      super(props) 
        this.state = {
          counter : [
          {questionId: 1}
        ]}
    }

    handleNext() {
      const increment = [...this.state.counter]
      increment.questionId++;
    this.setState({ increment })
    alert(this.state.questionId)
}

    handlePrev() {
      const increment = [...this.state.counter]
      increment.questionId--;
    this.setState({ increment })
    alert(this.state.questionId)
} */

    render(){
    return (
            <PollsContainer>
                <Title>Название опроса</Title>
                <TakePollContent />
                <BottomButtons>
                <SwipeButton>Назад</SwipeButton>
                <SwipeButton>Далее</SwipeButton>
                </BottomButtons>
            </PollsContainer>

    )
}
}

const BottomButtons = styled.div`
display:flex;
flex-wrap: nowrap;
flex-direction: row;
position: absolute;
bottom:   0;
margin-bottom: 20px;
right:25%;
left:50%;
margin-left:-180px;
`

const SwipeButton = styled.button`
font-family: Muli;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
text-align: center;

color: #FFFFFF;

border-radius: 20px;
text-transform: uppercase;
padding: 9px 35px;
background: #CC9E29;
border: none;

:nth-child(2n){
    background: #5F76FF;
    margin-left: 15px;
}
`
