import React, { Component } from 'react';
import RenderRow from './RenderRow'
import axios from 'axios'
import '../assets/st.css'
import styled from 'styled-components'

import threeDotsIcon from '../assets/images/three-dots.svg'

/*
export default class PollsTable extends Component{
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
constructor(props){
  super(props);
  this.getHeader = this.getHeader.bind(this);
  this.getRowsData = this.getRowsData.bind(this);
  this.getKeys = this.getKeys.bind(this);
}

getKeys = () => {
  return Object.keys(this.props.data[0])
}

getHeader = () => {
  var keys = this.getKeys();
  return keys.map((key, index) => {
  return <th key={key}>{key}</th>
  })
}


 getRowsData = () => {
  var items = this.props.data;
  var keys = this.getKeys();
  return items.map((row, index)=>{
  return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
  })
  }


render() {
  return(
    <div>
      <table>
        <thead>
          <tr>{this.getHeader()}</tr>
        </thead>
        <tbody>
          {this.getRowsData()}
        </tbody>
      </table>
    </div>
  )
}
} */

export default class PollsTable extends React.Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
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

  render() {      
    return (
      
        this.state.data.map(function(item, key) {
             return (
            <table className='tbody'>
              <thead>
                <tr key = {key}>
                    {item.questionTitle}
                </tr>
                <tr key = {key}>
                    <td className='updated-text' >{item.updated}</td>
                </tr>
              </thead>
              <thead className='dateCreated'>
              <td>{item.dataCreated}</td>
              </thead>
              <a><ThreeDots src={threeDotsIcon} /></a>
              </table>

              )})
    )
  }
}

const ThreeDots = styled.img`
padding-left: 70px;
src: url({threeDotsIcon})

`


