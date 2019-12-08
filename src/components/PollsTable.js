import React, { Component } from 'react';
import RenderRow from './RenderRow'
import axios from 'axios'
import '../assets/st.css'
import styled from 'styled-components'

import threeDotsIcon from '../assets/images/three-dots.svg'
import profileImg from '../assets/images/profile-img.png'


export default class PollsTable extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        data: [],
        showMenu: false,
      }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
    this.props.showMenu();
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }


componentDidMount(){
    axios.get(`http://localhost:3003/my-polls`)
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
            <TableBody>
              <ProfileImg key = {key} src={profileImg}/>
              <thead>
                <a><TableRow key = {key}>
                    {item.questionTitle}
                </TableRow></a>
                <TableRow key = {key}>
                    <UpdatedText >{item.updated}</UpdatedText>
                </TableRow>
              </thead>
              <DateCreated>
              <td>{item.dataCreated}</td>
              </DateCreated>
              <ThreeDots src={threeDotsIcon} /* onClick={this.showMenu} */ onClick={()=> alert("clicked ")} />
              {/* {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        } */}
              </TableBody> 
              )})
    )
  }
}

const ProfileImg = styled.img`
width: 50px;
margin-right: 25px;
`

const TableRow = styled.tr`
font-weight: bold;
  font-size: 20px; 
  width: 250px;
  display: block;
`

const TableBody = styled.table`
display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin: 20px;
`
const DateCreated = styled.thead`
margin-left: 1000px;
display: block;
  width: 200px;
`
const UpdatedText = styled.td`
color: #5F76FF;
`
const ThreeDots = styled.img`
padding-left: 70px;
src: url(${threeDotsIcon})
`







