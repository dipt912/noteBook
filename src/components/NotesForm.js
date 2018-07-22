import React from 'react';
import { Chips } from './common';



const NotesForm = ({ onChangeName,
    KeywordsSave,
    updateKeyValue,
    onChangeNoteText,
    onRemoveKey,
    keywords,
    name,
    keywordInput,
    noteText }) => {
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input
                        id="input_text"
                        value={name}
                        type="text"
                        className="black-text"
                        onChange={onChangeName}
                        data-length="100" />
                    <label >Subject</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="keywords"
                        type="text"
                        value={keywordInput}
                        className="black-text"
                        data-length="100"
                        onKeyDown={KeywordsSave}
                        onChange={updateKeyValue} />
                    <label >keywords</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 left-align">
                    <div>
                        {renderKeyword(keywords, onRemoveKey)}

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea
                        id="textarea2"
                        value={noteText}
                        className="materialize-textarea black-text"
                        onChange={onChangeNoteText}
                        data-length="400"></textarea>
                    <label >Notes</label>
                </div>
            </div>

        </form>
    )
}

const renderKeyword = (keywords, onRemoveKey) => {
    if (keywords.length > 0) {
        return (
            keywords.map((keyText, index) => {
                return <Chips key={index} text={keyText} onDelete={onRemoveKey} />
            })
        )
    }
}

export default NotesForm;