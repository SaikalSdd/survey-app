import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import '../assets/st.css'
import styled from 'styled-components'
import MyPolls from './MyPolls'
import SideNav from './SideNav';
import NavContent from './NavContent';


import background from '../assets/images/luco.png'
import profileImg from '../assets/images/profile-img.png'
import notificationIcon from '../assets/images/notification1.svg'
import AllPolls from './AllPolls';

export default class UserWindow extends Component {
    render(){
        return(
            <WindowContainer>
                
                <Router>
                <SideNav />
                <MainFrame>
                <TopBlock>
                    <Title>
                    <Switch>
                        <Route path="/my-polls" >
                            <h3>Мои Опросы</h3>
                        </Route>
                        <Route path="/all-polls">
                            <h3>Текущий опрос</h3>
                        </Route>
                        <Route path="/create-poll">
                            <h3>Создать опрос</h3>
                        </Route>
                        <Route path="/statistics">
                            <h3>Статистика</h3>
                        </Route>
                        <Route path="/profile">
                            <h3>Профиль</h3>
                        </Route>
                    </Switch>
                    </Title>
                    <SearchProf>
                        <SearchBar>
                            <form>
                                <input type='search' name='search' placeholder='Введите название опроса' />
                                <button className='search-button' type='submit'>Поиск</button>
                            </form>
                        </SearchBar>
                        <Notification src = {notificationIcon}/>
                        <VerticalLine />
                        <ProfileName>Нео Бисов</ProfileName>
                        <ProfileImg src = {profileImg} />
                    </SearchProf>
                </TopBlock>
                <NavContent />
                    </MainFrame>
                </Router>
            </WindowContainer>
        )
    }    
}

const WindowContainer = styled.div`
  display: flex;  
  flex-direction: row;
  flex-wrap: wrap;
`

const MainFrame = styled.div`
flex-grow: 1;
height:100vh;
background-image: url(${background}); 
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
const TopBlock = styled.div`
margin: 40px auto 30px auto;
display: flex;
flex-wrap: no-wrap;
`

const Title = styled.h4`
color: white;
margin-left: 20px;
`
const SearchProf = styled.div`
display: flex;
flex-direction: row;
flex-wrap: no-wrap;
`

const SearchBar = styled.div`

`
const VerticalLine = styled.div`
margin-left: 60px;
border-left: 2px solid white;
height: 30px;
`

const Notification = styled.img`
padding-left: 20px;
src: url({notificationIcon})
`
const ProfileImg = styled.img`
src: url({profileImg})

`
const ProfileName = styled.h3`
color: white;
  font-weight: normal;
  margin-left: 60px;
  font-size: 20px;
`

