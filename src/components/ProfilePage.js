import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios'
import ProfileHalf from "./ProfileHalf";
import PersonalInfo from "./PersonalInfo";


export default class ProfilePage extends React.Component {
  
  handleEdit() {
    this.setState( {disabled: !this.state.disabled})
}


  render() { 
      return ( 
    <Container>
    <Content>
      <ProfileHalf />
      <PersonalInfo />
    </Content>
    <BottomBtns>
      <BottomBtn>Редактировать</BottomBtn>
      <BottomBtn>Отменить</BottomBtn>
      <BottomBtn>Сохранить</BottomBtn>
    </BottomBtns>
    </Container>
    )
}

}

const Container = styled.div`
    display:block;
    margin: 0 auto;
    width: 96%;
    height: 86vh;
    background: #DEDEDE;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;

` 

const Content = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: row;

`
const BottomBtns = styled.div`
display:flex;
flex-wrap: nowrap;
flex-direction: row;
position: absolute;
bottom:   0;
margin-bottom: 20px;
right:20%;
left:80%;
margin-left:-150px;

`
const BottomBtn = styled.button`
margin: 10px;
background: #8A9AF4;
border-radius: 20px;
border:none;

padding: 6px; 
font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

letter-spacing: 0.2px;

color: #FFFFFF;

:nth-child(2){
  background: grey;
}
:nth-child(3){
  background: #5F76FF;
}

`