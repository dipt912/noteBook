import React, { Component } from 'react';

const Btn = ({className, text, onClick}) => {
    return (
        <div>
            <button className={className}  onClick= {onClick}> {text} </button>
        </div>
    )
}

export {Btn};