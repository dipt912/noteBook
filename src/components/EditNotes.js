import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
    onChangeName,
    onChangeKeywordText,
    onChangeNoteText,
    onChangeKeywordUpdate,
    onRemoveKey,
    onEditNote,
    setSelectedNote,
    onDeleteNote
} from '../Actions';
import NotesForm from './NotesForm';
import _ from 'lodash';

class EditNotes extends Component {
    componentDidMount() {
        console.log(this.props.match.params);
        const { uid } = this.props.match.params;
        const selectedNote = _.find(this.props.notes, note => uid === note.uid);
        console.log(selectedNote);
        this.props.setSelectedNote(selectedNote);
    }

    KeywordsSave(e) {
        if (e.keyCode === 13) {
            const { keywordInput } = this.props.editNote;
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

    onEditNote() {
        const { name, noteText, keywords, uid } = this.props.editNote;
        const { history } = this.props;
        this.props.onEditNote({ name, noteText, keywords, uid, history });
    }
    onDeleteNote() {
        const { uid } = this.props.editNote;
        const { history } = this.props;
        this.props.onDeleteNote({ uid, history });
    }

    renderCreateNoteButton() {
        const { createNoteProgress } = this.props.editNote;
        if (createNoteProgress) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }
        return (
            <div>
                <input type="submit" className="btn" value="Edit" onClick={this.onEditNote.bind(this)} />
                <input type="submit" className="btn" value="Delete" onClick={this.onDeleteNote.bind(this)} />
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
                        {...this.props.editNote}
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

    const noteList = _.map(state.notes, (val, uid) => {
        return { ...val, uid };
    })
    console.log("notes", noteList);
    return {
        notes: noteList,
        editNote: state.createNote
    }
};

export default withRouter(connect(mapStateToProps, {
    onChangeName,
    onChangeKeywordText,
    onChangeNoteText,
    onChangeKeywordUpdate,
    onRemoveKey,
    onEditNote,
    setSelectedNote,
    onDeleteNote
})(EditNotes));
