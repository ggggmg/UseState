import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h2>Header</h2>
            <NavLink to='/'>Counter-Main</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/modal'>Modal</NavLink>
            <NavLink to='/todo'>TodoList</NavLink>
            <NavLink to='/giphy'>Giphy</NavLink>
            <NavLink to='/kinopoisk'>Kinopoisk</NavLink>
        </>
    );
};

export default Header;

