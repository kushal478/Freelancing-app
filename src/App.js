
import React, { Component } from 'react';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';
import logo from './logo.svg';
// import './App.css';

import React from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from "config";

class AppRouter extends Component {

    mapStateToProps = sate => ({
        ...sate
    });

    mapDispatchToProps = dispatch => ({
        simpleAction: () => dispatch(simpleAction())
    });

    simpleAction = (event) => {
        this.props.simpleAction();
    }
    render() {
        return (
            <>
                <Router basename={`${config.publicPath}`}>
                    <Route render={(props) => <AppContainer {...props} />} />
                </Router>


                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload
                    </p>
                    <button onClick={this.simpleAction}>Test redux action</button>
                    <pre>
                        {
                            JSON.stringify(this.props)
                        }
                    </pre>
                </div>
            </>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);

