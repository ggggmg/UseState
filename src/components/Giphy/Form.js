import React from 'react';
import InputHandle from './InputHandle';

const Form = ({value, handleAllValues, searchGiphy}) => {
    return (
        <form onSubmit={searchGiphy}>
            <InputHandle
                type="text" 
                values = {value.title}
                handleAllValues = {handleAllValues}
                name = 'title'
            />

            <InputHandle
                type="number" 
                values = {value.count}
                handleAllValues = {handleAllValues}
                name = 'count'
            />

            <button
            //    disabled={} 
            >Search Giphy</button>
            
        </form>
    );
};

export default Form;