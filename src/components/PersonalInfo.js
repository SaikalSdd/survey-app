import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios'

import bluePen from '../assets/images/blue-pen.svg'



export default class PersonalInfo extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        data: [],
        disabled: true,
      }
  }

handleEdit() {
    this.setState( {disabled: !this.state.disabled})
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
    const data = this.state.data
    const handleEdit = () => {
        this.setState( {disabled: !data.disabled})
    }
    return ( 
          <PersonalInform>
              <Title>Личная информация</Title>
              <PostForm>
              {this.state.data.map(function(item, key) {
            return (
                <ul>  
                    <FormRow>
                <Label>Никнейм</Label>
                <Input type="text" value={item.nickname} disabled={data.disabled} />
                <Circle onClick={()=> handleEdit()} />
                    </FormRow>
                <FormRow>
              <Label>Имя</Label>
                <Input type="text" value={item.firstname} />
                <Circle onClick={()=> alert("clicked ")} />
            </FormRow>
            <FormRow>
              <Label>Фамилия</Label>
                <Input type="text" value={item.lastname} />
                <Circle onClick={()=> alert("clicked ")} />
            </FormRow>
            <FormRow>
              <Label>Дата рождения</Label>
                <Input type="text" value={item.date} />
            </FormRow>
            <FormRow>
              <Label>email</Label>
                <Input type="text" value={item.email} />
            </FormRow>
            <FormRow>
              <Label>Телефон</Label>
                <Input type="text" value={item.phone} />
                <Circle onClick={()=> alert("clicked ")} />
            </FormRow>
            <FormRow>
              <Label>Страна</Label>
              <Input type="text" value={item.state} />
              <Circle onClick={()=> alert("clicked ")} />
            </FormRow>
            <FormRow>
              <Label>Город</Label>
                <Input type="text" value={item.city}  />
            </FormRow>
            <FormRow>
              <Label>Пол</Label>
                <Input type="text" value={item.gender} />
                </FormRow>
            </ul>
            )})}
              </PostForm>
              <PasswordBlock />
          </PersonalInform>
            
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

const Input = styled.input`

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
const PasswordBlock = styled.div`
width: 673px;
height: 221px;
margin: 38px;
background: #3F414A;
border-radius: 10px;
`