import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

import NavBar from './components/navbar';

import Footer from './components/footer';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                
                <div>
                <NavBar />
                    <Route exact path="/" component={Login} />
                <Footer />
                </div>
                
            </Router>
        )
    }
}

export default AppRouter;