import React from 'react';


const Chips = ({text, onDelete})=> {
    return(
        <div className="chip">
           {text}
            <i  className="close material-icons" onClick ={onDelete}>close</i>
         </div>
    )
}

export {Chips};