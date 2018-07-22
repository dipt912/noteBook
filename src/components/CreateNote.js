import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
    onChangeName,
    onChangeKeywordText,
    onChangeNoteText,
    onChangeKeywordUpdate,
    onRemoveKey,
    onCreateNote,
    resetCreateState
} from '../Actions';
import NotesForm from './NotesForm';

class CreateNote extends Component {

    componentWillMount() {
        this.props.resetCreateState();
    }

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

    onRemoveKey(i) {
        this.props.onRemoveKey(i);
    }

    onCreateNote() {
        const { name, noteText, keywords } = this.props.createNote;
        const { history } = this.props;
        this.props.onCreateNote({ name, noteText, keywords, history });
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
            <div>
                <input type="submit" className="btn" value="Create" onClick={this.onCreateNote.bind(this)} />
                <Link
                    className="btn waves-effect waves-light"
                    to="/notes" >
                    cancel
                 </Link>
            </div>

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
        return (
            <div className="container center-align">
                <div className="row">
                    <NotesForm
                        onChangeName={this.onChangeName.bind(this)}
                        KeywordsSave={this.KeywordsSave.bind(this)}
                        updateKeyValue={this.updateKeyValue.bind(this)}
                        onChangeNoteText={this.onChangeNoteText.bind(this)}
                        onRemoveKey={this.onRemoveKey.bind(this)}
                        {...this.props.createNote}
                    />

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
    onCreateNote,
    resetCreateState
})(CreateNote));
