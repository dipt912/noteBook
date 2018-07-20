import React from 'react';

const Card = ({name, noteText, keywords}) => {
   
    return(
        
    <div className="col s12 m4">
      <div className="card yellow lighten-1">
        <div className="card-content black-text">
          <span className="card-title">{name}</span>
          <p><i>{noteText}</i></p>
        </div>
        <div className="card-action">
          {renderKeyWords(keywords)}
        </div>
      </div>
    </div>
  
    )
}

const renderKeyWords = (keywords)=>{
    if(keywords.length> 0){
        return keywords.map((keyword, i)=>{
            return (
                <div key={i} className= "chip">{keyword}</div>
            )
        })
    }
}

export {Card};