import React, { Component } from 'react';
import { Input, Btn } from './common';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { onChangeEmail, onChangePassword, onLogin } from '../Actions';

class Login extends Component {
    userNameChange(e) {

        this.props.onChangeEmail(e.target.value)
    }

    passwordChange(e) {
        this.props.onChangePassword(e.target.value);
    }
    onLogin() {
        const { history } = this.props;
        const { email, password } = this.props.auth
        this.props.onLogin({ email, password, history })
    }
    renderLoginButton() {
        const { loading } = this.props.auth;
        if (loading) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }
        return (
            <input type="submit" className="btn" value="Sign In" onClick={this.onLogin.bind(this)}/>
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
        const { email, password } = this.props.auth
        return (
            // <div className="row">
            //     <div className='container col s10 m4 offset-m4 offset-s1'>
            //         <div className="row">
            //             <div>
            //                 <Input value={email}
            //                     type="email"
            //                     placeholder="username"
            //                     onChange={this.userNameChange.bind(this)} />
            //             </div>
            //             <div>
            //                 <Input value={password}
            //                     type="password"
            //                     placeholder="password"
            //                     onChange={this.passwordChange.bind(this)} />
            //             </div>
            //             {this.displayError()}
            //             <div>
            //                 {this.renderLoginButton()}
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div className="valign-wrapper page-center">
                <div className="valign full-width">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6 offset-m3">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title teal-text">Sign In</span>

                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input
                                                    placeholder="abc@xyz.com"
                                                    value={email} id="email"
                                                    type="text"
                                                     className="validate teal-text"
                                                     onChange={this.userNameChange.bind(this)} />
                                                    <label for="email" className="active">Email</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input
                                                    placeholder="password"
                                                    value={password}
                                                     id="password"
                                                     onChange={this.passwordChange.bind(this)}
                                                     type="password"
                                                    className="validate teal-text" />
                                                    <label for="password" className="active">password</label>
                                                </div>
                                            </div>

                                    </div>
                                    {this.displayError()}
                                    <div className="card-action">
                                   { this.renderLoginButton() }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps, { onChangeEmail, onChangePassword, onLogin })(Login));
