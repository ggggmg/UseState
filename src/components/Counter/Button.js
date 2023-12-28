import React from 'react';

const Button = ({name, action, disabledButton}) => {

    
    
    return (
        <>
            <button
                onClick={action}
                disabled = {disabledButton}
            >
                {name}
            </button>
            
        </>
    );
};

export default Button;