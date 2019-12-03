import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios'

import profileImg from '../assets/images/profile-circle.png'


export default class ProfileHalf extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        data: [],
      }
    
  }

componentDidMount(){
    axios.get(`http://localhost:3003/user`)
    .then(res => {  
        console.log(res)
        this.setState({data: res.data});
    })
    .catch(error => 
      console.log("error:", error))
  }

  render() { 
      return ( 
        this.state.data.map(function(item, key) {
            return (       
            <Profile>
                <Name key={key}>{item.firstname + " " + item.lastname}</Name>
                <ProfileImgs key={key} src={profileImg}/>
                <NicknameTitle>Никнейм</NicknameTitle>
                <Nickname>{item.nickname}</Nickname>
                <Remark>Скопируйте никнейм пользователя</Remark>
            </Profile>
        )})    
    )
}

}


const Profile = styled.div`
width: 1000px;

`

const Name = styled.h2`
margin-top: 36px;
font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 20px;

text-align: center;
width: 100%;
letter-spacing: 0.2px;

color: #353C64;
border-radius: 10px;
`

const ProfileImgs = styled.img`
margin-top: 34px;
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 210px;
  border: 5px solid #0078B4;
  border-radius: 50%;

`

const NicknameTitle = styled.h4`
margin-top: 37px;

font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 35px;

text-align: center;
letter-spacing: 0.2px;

color: #353C64;
`
const Nickname = styled.h2`
margin-top: 29px;

font-family: Muli;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 35px;
/* identical to box height, or 74% */

text-align: center;
letter-spacing: 0.2px;

color: #5F76FF;

padding-bottom: 9px;
border-bottom: 3px solid #5F76FF;
width: 450px;
display: block;
  margin-left: auto;
  margin-right: auto;
`

const Remark = styled.h4`
margin-top: 8px;

font-family: Muli;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 35px;

text-align: center;
letter-spacing: 0.2px;

color: #3F414A;
`
