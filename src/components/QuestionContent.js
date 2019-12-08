import React, { Component } from 'react';
import RenderRow from './RenderRow'
import axios from 'axios'
import '../assets/st.css'
import styled from 'styled-components'
import PollChoices from './PollChoices';


export default class QuestionContent  extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        data: [],
        questionId: 1, 
      }

      this.handleClick = this.handleClick.bind(this);
    }

handleClick(e) {
  this.setState({
    questionId : e
  })
}

componentDidMount(){
    fetch(`http://localhost:3002/takePoll`)
    .then(response => response.json())
    .then(json => this.setState({ data:json }))         
    }

    allComponents = (questionType) =>{
      if(questionType === 'Напишите свой вариант'){
        return(<AnswerInput placeholder="Введите ответ" />)
      }
      else if (questionType === 'Выберите из предложенных вариантов'){
        return(
          <div>
            {this.state.data.map((item, key) => (<PollChoices 
            optionsImg = {item.optionsImg} 
            optionsText = {item.optionsText}
            key = {key}
            />))}
          </div>

        )
      }
      else if(questionType === 'Выберите дату'){
        return(<DateSelect >
          <Day value='15' />
          <Select>
          <Option value='1'>ЯНВАРЬ</Option>
          <Option value='2'>ФЕВРАЛЬ</Option>
          <Option value='3'>МАРТ</Option>
          <Option selected value='4'>АПРЕЛЬ</Option>
          <Option value='5'>МАЙ</Option>
          <Option value='6'>ИЮНЬ</Option>
          <Option value='7'>ИЮЛЬ</Option>
          <Option value='8'>АВГУСТ</Option>
          <Option value='9'>СЕНТЯБРЬ</Option>
          <Option value='10'>ОКТЯБРЬ</Option>
          <Option value='11'>НОЯБРЬ</Option>
          <Option value='12'>ДЕКАБРЬ</Option>
          </Select> 
          <Year value='1452' />
          </DateSelect>)
      }
      else if(questionType === 'Выберите из предложенных вариантов' ){
        
      }
    }

  render() {
    var questions,
    questions = this.state.data,
    questionId = this.state.questionId
    
    if(questionId > 0){
      questions = questions.filter(q => {
          return q.questionId.toString().match( questionId.toString());
      });
    }  

    return (
      <div>
      <Flex>
      {this.state.data.map((item, key) => (
            <div>
            <QuestionNumber key={key} onClick={() => {this.handleClick(item.questionId)}}>{ item.questionId }</QuestionNumber>
            </div>
      ))}
    </Flex>
      <h2>{this.state.pollData}</h2>
    {questions.map(q => (
      <div>
        <QuestionType>{q.questionType}</QuestionType>
        <QuestionTitle>{q.questionTitle}</QuestionTitle>
      <div>
        {this.allComponents(q.questionType)}
      </div>
    </div>
    ))}
      
    </div>
    )}
}


const Flex = styled.div`
display:flex;
flex-direction: row;
flex-wrap: nowrap;

width: 400px;
margin: 0 auto;

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
const QuestionType = styled.h2`
margin-top: 28px;

font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;

text-align: center;

color: #828282;
`
const QuestionTitle = styled.h1`
margin-top: 28px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;

text-align: center;

color: #5F76FF;
`

const AnswerInput = styled.input`
top: 60px;

width: 692px;
height: 50px;
display:block;
margin: 0 auto;
background: #DEDEDE;
border-radius: 10px;
`

const DateSelect = styled.div`
margin-top: 100px;
margin: 0 auto;
display: flex;
width: 800px;
`

const Day = styled.input`
width: 83px;
height: 58px;
margin: 60px;

background: #828282;
border-radius: 16px;

font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 45px;
text-align: center;

color: #FFFFFF;
`
const Select = styled.select`
width: 260px;
height: 58px;
margin: 60px;


background: #828282;
border-radius: 16px;


font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
text-align: center;
padding: 2px 75px;

color: #FFFFFF;

-webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;   

::-ms-expand {
  display: none;
  border-radius: 16px;
}

`

const Option = styled.option`
width: 240px;
height: 58px;

background: #8A9AF4;
border-radius: 16px;
`

const Year = styled.input`
width: 166px;
height: 58px;
margin: 60px;


background: #828282;
border-radius: 16px;

font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 45px;
text-align: center;

color: #FFFFFF;
`
