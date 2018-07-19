import React, { Component } from 'react';

const Input = ({value, placeholder, onChange ,type}) => {
    return (
        <div>
            <input  
                type ={type}
                value={value}     
                placeholder = {placeholder} 
                onChange={ onChange } />
        </div>
    )
}

export {Input};