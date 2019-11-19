import React, { Component } from 'react';
import styled from 'styled-components';
import "../assets/style.css";
import axios from 'axios';

import sortIcon from '../assets/images/sort.svg'
import PollsTable from './PollsTable';


export default class Questions extends Component{
    state = {
        data: []
    }
    componentDidMount(){
        axios.get(`http://localhost:3000/qBank`)
        .then(res => {  
            console.log(res)
            this.setState({data: res.data});
        })
        .catch(error => 
          console.log("error:", error))
      }
    render(){
        return (
            <PollsContainer>
                <Sorting><img alt="Сортировка" src={sortIcon}/><span>Сортировка</span></Sorting>
                <PollTitles>Названия опросов</PollTitles>
                <PollsTable  />
                
            </PollsContainer>
        )
    }
}

const PollsContainer = styled.div`
    display:block;
    margin: 0 auto;
    width: 96%;
    height: 84vh;
    background-color: #EDEDED;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

` 

const Sorting = styled.li`
font-size: 20px;
padding-top: 40px;
font-weight: bold;
p {
    display: block;
    padding: 15px 0;
    padding-left: 30px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
  
img {
    margin-right: 20px;
    width: 20px;
}
`
const PollTitles = styled.h2`
font-size: 20px;
font-weight: bold;
padding-top: 60px;
padding-left: 50px;
padding-bottom: 15px;
border-bottom: 3px solid rgba(63, 65, 74, 0.08);
`

