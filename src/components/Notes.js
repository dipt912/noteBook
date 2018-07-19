import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notes extends Component {
    render() {
        return (
            <div className="center-align">
            <div class="divider"></div>
                <Link
                    className="btn-floating btn-large waves-effect waves-light red"
                    to="/createNote">
                        <i class="material-icons">add</i>
                </Link>
                <div class="divider"></div>
            </div>
        )
    }
}

export default Notes;
