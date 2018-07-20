import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

import NavBar from './components/navbar';

import Footer from './components/footer';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import { connect } from 'react-redux';

class AppRouter extends Component {
    renderLandingPage() {
        const { user } = this.props.auth;

        if(!user){
            return (
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
            )
        }
        return (
            
            <Switch>
                    <Route exact path="/" component={Notes} />
                    <Route exact path="/notes" component={Notes} />
                    <Route exact path="/createNote" component={CreateNote} />
                </Switch>
        )
    }

    render() {
        return (
            <Router>

                <div>
                <NavBar />
                {/* <Switch> */}
                    {this.renderLandingPage()}
                    
                    {/* <Route exact path="/notes" component={Notes} />
                    <Route exact path="/createNote" component={CreateNote} />
                </Switch> */}
                <Footer />
                </div>

            </Router>
        )
    }
}
const mapStateTiprops = (state)=> {
    return {
        auth : state.auth
    }
}

export default connect(mapStateTiprops, null)(AppRouter);
