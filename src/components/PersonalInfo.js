import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios'
import "../assets/style.css";

import PasswordStrengthMeter from './PasswordStrengthMeter'
import bluePen from '../assets/images/blue-pen.svg'
import eye from '../assets/images/eyeopen.svg'
import eyeclose from '../assets/images/eyeclose.svg'




export default class PersonalInfo extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        data: [],
        disabled: true,
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      }
  }

handleEdit() {
    this.setState( {disabled: !this.state.disabled})
}

componentDidMount(){
    axios.get(`http://localhost:3003/user`)
    .then(res => {  
        console.log(res)
        this.setState({data:res.data});
    })
    .catch(error => 
      console.log("error:", error))
  }

  render() { 
    const { oldPassword, newPassword, confirmNewPassword } = this.state;
    return ( 
        
        this.state.data.map((item, key) => (
          <PersonalInform>
              <Title>Личная информация</Title>
              <PostForm>
                <ul className='formlist'>
                    <FormRow>
                <Label>Никнейм</Label>
                <Input type="text" key = {key} value={item.nickname} ref={(ip) => this.nicknameInp = ip} /* disabled={this.state.disabled} *//>
                <Circle onClick={() => { 
                /* this.handleEdit(); */
                this.nicknameInp.focus();
                }
                } />
                    </FormRow>
                <FormRow>
              <Label>Имя</Label>
                <Input type="text" key = {key} value={item.firstname} ref={(ip) => this.nameInp = ip} />
                <Circle onClick={() => { 
                /* this.handleEdit(); */
                this.nameInp.focus();
                }
                } />
            </FormRow>
            <FormRow>
              <Label>Фамилия</Label>
                <Input type="text" key = {key} value={item.lastname} ref={(ip) => this.lnameInp = ip} />
                <Circle onClick={() => { 
                /* this.handleEdit(); */
                this.lnameInp.focus();
                }
                } />
            </FormRow>
            <FormRow>
              <Label>Дата рождения</Label>
                <Input type="text" key = {key} value={item.date} />
            </FormRow>
            <FormRow>
              <Label>email</Label>
                <Input type="text" key = {key} value={item.email} />
            </FormRow>
            <FormRow>
              <Label>Телефон</Label>
                <Input type="text" key = {key} value={item.phone} ref={(ip) => this.phoneInp = ip} />
                <Circle onClick={() => { 
                /* this.handleEdit(); */
                this.phoneInp.focus();
                }
                } />
            </FormRow>
            <FormRow>
              <Label>Страна</Label>
              <Input type="text" key = {key} value={item.state} ref={(ip) => this.stateInp = ip} />
              <Circle onClick={() => { 
                /* this.handleEdit(); */
                this.stateInp.focus();
                }
                } />
            </FormRow>
            <FormRow>
              <Label>Город</Label>
                <Input type="text" key = {key} value={item.city}  />
            </FormRow>
            <FormRow>
            <Label>Пол: {item.gender}</Label>
                <ChangeButton type="button" key = {key}>Изменить</ChangeButton>
                </FormRow>
            </ul>
            <ChangePswrdBtn>Сменить пароль</ChangePswrdBtn>
              </PostForm>
              <PasswordBlock>
            <Line>
              <PassInput autoComplete="off" type="password" placeholder="Текущий пароль" onChange={e => this.setState({ oldPassword: e.target.value })} />
              <LevelText>Уровень сложности</LevelText>
              <PasswordStrengthMeter password={oldPassword} />
            </Line>
            <Line>
              <PassInput autoComplete="off" type="password" placeholder="Новый пароль" onChange={e => this.setState({ newPassword: e.target.value })} />
              <LevelText>Уровень сложности</LevelText>
              <PasswordStrengthMeter password={newPassword} />
            </Line>
            <Line>
              <PassInput autoComplete="off" type="password" placeholder="Подтвердите новый пароль" onChange={e => this.setState({ confirmNewPassword: e.target.value })} />
              <LevelText>Уровень сложности</LevelText>
              <PasswordStrengthMeter password={confirmNewPassword} />
            </Line>
              </PasswordBlock>
          </PersonalInform>
        ))

            
  )
}

}


const PersonalInform = styled.div`
background: #EDEDED;
width: 738px;
height: 827px;
`
const Title = styled.h1`
margin-top: 26px;
margin-bottom: 32px;
width: 100%;
text-align: center;

font-family: Muli;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 20px;

letter-spacing: 0.2px;

color: #353C64;
`
const PostForm = styled.div`
display: flex;
flex-direction: column;
margin: 38px;
`
const FormRow = styled.li`
display: flex;
justify-content: flex-start;
margin-bottom: 20px;

:nth-child(9){
    margin-bottom: -15px;
}
`

export const Input = styled.input`

width: 400px;
background: #FFFFFF;
border: 2px solid #DEDEDE;
border-radius: 8px;
padding: 5px;

font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

letter-spacing: 0.2px;

color: #5F76FF;

`

const Label = styled.label`
width: 180px;
font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 20px;

letter-spacing: 0.2px;

color: #353C64;
border-radius: 10px;
`

const Circle = styled.circle`
margin-left: 5px;
display: block;
    width: 30px;
    height: 30px;
    background: white;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    background-image: url(${bluePen});
    background-position:50% 50%;
    background-repeat:no-repeat;
    cursor:pointer; 
`
const ChangeButton = styled.button`
width: 88px;
height: 24px;

font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

text-align: center;
letter-spacing: 0.2px;

color: #FFFFFF;
background: #353C64;

border: none;
border-radius: 10px;
`
const ChangePswrdBtn = styled.button`
z-index: 2;
margin-top: 20px;

width: 673px;
height: 28px;

background: #5F76FF;
border-radius: 10px;

font-family: Muli;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

text-align: center;
letter-spacing: 0.2px;

color: #FFFFFF;
`
const PasswordBlock = styled.div`
z-index: 1;
margin-top: -58px;
margin-left: 38px;
padding-top: 35px;

width: 673px;
height: 250px;
background: #3F414A;
border-radius: 0px 0px 10px 10px;
`
const Line = styled.div`
margin: 15px;
dislay: flex;
flex-wrap: nowrap;
flex-direction: row;
display: -webkit-box;
   display: -moz-box;       
   display: -ms-flexbox;     
   display: -webkit-flex;  
`
const PassInput = styled.input`
width: 300px;
background: #FFFFFF;
border: 2px solid #DEDEDE;
border-radius: 8px;

font-family: Muli;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 10px;

letter-spacing: 0.2px;

color: #5F76FF;

::after{
    content: '';
    width: 24px;
    height: 14px;
    position: absolute;
    right: 10px;
    top: 28%;
    background: url(${eye}) no-repeat center/cover;
}

`

const LevelText = styled.h2`
width: 72px;
padding-left: 10px;
padding-right: 90px;
font-family: Muli;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
/* or 133% */

text-align: center;
letter-spacing: 0.2px;

color: #FFFFFF;
`