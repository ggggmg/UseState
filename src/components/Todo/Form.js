import React from 'react';

const Form = ({name, handleName, createTodo, toggle}) => {
    return (
        <>
            <form onSubmit={e => createTodo(e)} >
                <input 
                    type="text" 
                    value={name}
                    onChange={handleName}
                />
                <button disabled = {toggle}>Create Todo</button>
            </form>
        </>
    );
};

export default Form;