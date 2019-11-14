import React, { Component } from 'react';
import '../assets/st.css'

export default class UserWindow extends Component {
    render(){
        return(
            <div className='window_container'>
               <nav className='sidebar'>
               <li className = 'logotype-nav'><a href='#'></a></li>
                   <ul className='nav-listing'>
                       <li className = 'item1'><a href='#'>Мои опросы</a></li>
                       <li className = 'item'><a href='#'>Опросы</a></li>
                       <li className = 'item'><a href='#'>Создать опрос</a></li>
                       <li className = 'item'><a href='#'>Статистика</a></li>
                   </ul>
                </nav>  
                <div className='main_frame'>
                    <div className='top-block'>
                        <h1>Мои опросы</h1>
                        <div className='search-container'>
                            <form>
                                <input type='search' name='search' placeholder='Введите название опроса' />
                                <button type='submit'>Поиск</button>
                            </form>
                        </div>
                        <div class="vertical-line"></div>
                        <h2 className='profile-name'>Нео Бисов</h2>
                        <img src='../assets/images/luco.png' alt='prof-picture' />
                    </div>
                </div>
            </div>
        )
    }
}
