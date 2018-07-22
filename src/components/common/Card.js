import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { name, noteText, keywords, uid} = props;
     const to = `/EditNotes/${uid}`;
    return (

        <div className="col s12 m4">
            <div className="card blue lighten-5 z-depth-5">
                <div className="card-content black-text">
                    <span >
                       <span className="col s10 card-title capital truncate"> {name}</span>
                        <span className="col s2 right-box">
                            <Link
                                className="btn-small waves-effect waves-light"
                                to={to} params ={{uid : uid}}>
                                <i className="small edit material-icons">edit</i>
                            </Link>
                        </span>
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

const renderKeyWords = (keywords) => {
    if (keywords.length > 0) {
        return keywords.map((keyword, i) => {
            return (
                <div key={i} className="chip">{keyword}</div>
            )
        })
    }
}

export { Card };