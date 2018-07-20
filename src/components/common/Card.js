import React from 'react';

const Card = ({name, noteText, keywords}) => {
   
    return(
        
    <div className="col s12 m4">
      <div className="card blue lighten-5 z-depth-5">
        <div className="card-content black-text">
          <span className="card-title capital truncate">{name} 
          <span> <i className="edit material-icons"> edit</i> </span>
          </span>
          
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