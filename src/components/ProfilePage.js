import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios'
import ProfileHalf from "./ProfileHalf";
import PersonalInfo from "./PersonalInfo";


export default class ProfilePage extends React.Component {
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
    axios.get(`http://localhost:3003/registrations`)
    .then(res => {  
        console.log(res)
        this.setState({data: res.data});
    })
    .catch(error => 
      console.log("error:", error))
  }

  render() { 
      return ( 
    <Container>
    <Content>
      <ProfileHalf />
      <PersonalInfo />
    </Content>
    </Container>
    )
}

}

const Container = styled.div`
    display:block;
    margin: 0 auto;
    width: 96%;
    height: 85vh;
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
