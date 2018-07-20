import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CreateNote extends Component {
    render() {
        return (
            <div className="container center-align">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="input_text" type="text" class="black-text" data-length="100" />
                                <label for="input_text">Subject</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea2" className="materialize-textarea black-text" data-length="400"></textarea>
                                <label for="textarea2">Notes</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateNote;
