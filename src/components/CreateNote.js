import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    onChangeName,
    onChangeKeywordText,
    onChangeNoteText,
    onChangeKeywordUpdate,
    onRemoveKey,
    onCreateNote
} from '../Actions';
import { Chips } from './common';

class CreateNote extends Component {

    KeywordsSave(e) {
        if (e.keyCode === 13) {
            const { keywordInput } = this.props.createNote;
            this.props.onChangeKeywordUpdate(keywordInput);
        }

    }

    updateKeyValue(e) {
        this.props.onChangeKeywordText(e.target.value);
    }

    onChangeNoteText(e) {
        this.props.onChangeNoteText(e.target.value);
    }

    onChangeName(e) {

        this.props.onChangeName(e.target.value);

    }

    renderKeyword() {
        const { keywords } = this.props.createNote;
        if(keywords.length > 0){
            return(
                keywords.map((keyText, index) => {
                    return <Chips key={index} text={keyText} onDelete = {this.onRemoveKey.bind(this, index)}/>
                })
            )
        }
    }

    onRemoveKey(i) {
        console.log('index', i);
        this.props.onRemoveKey(i);
    }

    onCreateNote(){
        const { name, noteText, keywords } = this.props.createNote;
        const { history } = this.props;
        this.props.onCreateNote({name, noteText, keywords, history });
    }
    
    renderCreateNoteButton() {
        const { createNoteProgress } = this.props.createNote;
        if (createNoteProgress) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }
        return (
            <input type="submit" className="btn" value="Create" onClick={this.onCreateNote.bind(this)}/>
        )
    }

    displayError() {
        const { error } = this.props.auth;
        if (error !== '') {
            return (
                <div className="red-text text-darken-2">  {error}</div>
            )

        }
    }


    render() {
        const { name, noteText, keywordInput } = this.props.createNote
        return (
            <div className="container center-align">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="input_text"
                                    value={name}
                                    type="text"
                                    className="black-text"
                                    onChange={this.onChangeName.bind(this)}
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
                                    onKeyDown={this.KeywordsSave.bind(this)}
                                    onChange={this.updateKeyValue.bind(this)} />
                                <label >keywords</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 left-align">
                                <div> 
                                  {this.renderKeyword()}

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    id="textarea2"
                                    value={noteText}
                                    className="materialize-textarea black-text"
                                    onChange={this.onChangeNoteText.bind(this)}
                                    data-length="400"></textarea>
                                <label >Notes</label>
                            </div>
                        </div>
                        
                    </form>

                    <div className="row">
                            {this.renderCreateNoteButton()}
                        </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        createNote: state.createNote
    }
};

export default withRouter(connect(mapStateToProps, {
    onChangeName,
    onChangeKeywordText,
    onChangeNoteText,
    onChangeKeywordUpdate,
    onRemoveKey,
    onCreateNote
})(CreateNote));
