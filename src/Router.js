import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

import NavBar from './components/navbar';

import Footer from './components/footer';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';

class AppRouter extends Component {
    render() {
        return (
            <Router>

                <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/notes" component={Notes} />
                    <Route exact path="/createNote" component={CreateNote} />
                </Switch>
                <Footer />
                </div>

            </Router>
        )
    }
}

export default AppRouter;
