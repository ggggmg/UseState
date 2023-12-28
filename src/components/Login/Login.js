import React, { useState } from 'react';

const Login = () => {

    const [login, setLogin] = useState({
        firstName: '',
        lastName: '',
        password: ''
    })

    // [prop] - динамический ключ объекта, можно передать несколько ключей через 1 функцию
    const handleAllValues = (prop) => (e) => {
        setLogin(prev => ({...prev, [prop]: e.target.value}))
    }

    const clearState = (prop) => (e) => {
        setLogin(prev => ({...prev, [prop]: ''})
        )
    }

    return (
        <>
            <h2>Login</h2>

            <input 
                type="text" 
                value={login.firstName}
                onChange={handleAllValues('firstName')}
            />
            <strong onClick={clearState('firstName')}>X</strong>
            <input 
                type="text" 
                value={login.lastName}
                onChange={handleAllValues('lastName')}
            />
            <strong onClick={clearState('lastName')}>X</strong>
            <input 
                type="password" 
                value={login.password}
                onChange={handleAllValues('password')}
            />

            <p></p>
            

        </>
    );
};

export default Login;