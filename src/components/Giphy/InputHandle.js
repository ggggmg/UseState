import React from 'react';

const InputHandle = ({values, type, handleAllValues, name}) => {
    return (
        <div>
            <input 
                type={type}
                onChange={handleAllValues(name)}
                values = {values}
            />
        </div>
    );
};

export default InputHandle;