import React from 'react';
import './App.css'
import Counter from './components/Counter/Counter';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Todo from './components/Todo/Todo';
import Giphy from './components/Giphy/Giphy';
import Kinopoisk from './components/Kinopoisk/Kinopoisk';
import Details from './components/Kinopoisk/Details';

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Counter/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/modal' element={<Modal/>} />
                <Route path='/todo' element={<Todo/>} />
                <Route path='/giphy' element={<Giphy/>} />
                <Route path='/kinopoisk' element={<Kinopoisk/>} />
                <Route path='/kinopoisk/details/:id' element={<Details/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;