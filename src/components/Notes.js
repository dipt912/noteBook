import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import {
    notesFetch
} from '../Actions';
import { Card } from './common';

class Notes extends Component {
    componentWillMount(){
        this.props.notesFetch()
    }
    renderNotes(){
        const { notes} = this.props;;
        if(notes.length> 0){
            return notes.map((note,i)=>{
                return <Card key={i} {...note} />
            })
        }
    }
    render() {
        return (
            <div className="container">
            <div className="center-align verical-align">
                <Link
                    className="btn-floating btn-large waves-effect waves-light red"
                    to="/createNote">
                        <i className="material-icons">add</i>
                </Link>
            </div>
            <div className="row">
                {this.renderNotes()}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    const noteList = _.map(state.notes, (val, uid) => {
        return { ...val, uid };
    })
    console.log("notes", noteList);
    return {
        notes: noteList
    }
}

export default connect(mapStateToProps, {notesFetch})(Notes);
