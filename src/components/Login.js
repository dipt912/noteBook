import React, { Component } from 'react';
import { Input, Btn } from './common';
import { connect } from 'react-redux';
import { onChangeEmail, onChangePassword, onLogin } from '../Actions';

class Login extends Component {
    userNameChange(e) {

        this.props.onChangeEmail(e.target.value)
    }

    passwordChange(e) {
        this.props.onChangePassword(e.target.value);
    }
    onLogin() {
        const { email, password } = this.props.auth
        console.log(email, password);
        this.props.onLogin({ email, password })
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
            <Btn
                text="Login or Register"
                className="waves-effect waves-light btn"
                onClick={this.onLogin.bind(this)} />
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
            <div className="row">
                <div className='container col s10 m4 offset-m4 offset-s1'>
                    <div className="row">
                        <div>
                            <Input value={email}
                                type="email"
                                placeholder="username"
                                onChange={this.userNameChange.bind(this)} />
                        </div>
                        <div>
                            <Input value={password}
                                type="password"
                                placeholder="password"
                                onChange={this.passwordChange.bind(this)} />
                        </div>
                        {this.displayError()}
                        <div>
                            {this.renderLoginButton()}
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

export default connect(mapStateToProps, { onChangeEmail, onChangePassword, onLogin })(Login);