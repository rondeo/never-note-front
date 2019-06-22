import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Enter, Register, Login, Main } from 'pages';

class App extends Component {
    state = {
        loggedIn: false
    };

    login = (username, password, history) => {
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(e => e.json())
        .then(e => {
            if(e.message === 'login-succeeded') {
                this.setState({
                    loggedIn: true
                });
                history.history.push('/main');
            }
        });
    }

    register = (username, password, history) => {
        fetch('/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(e => e.json())
        .then(e => {
            console.log(e);
            if(e.message === 'register-succeeded') {
                this.setState({
                    loggedIn: true
                });
                history.history.push('/main');
            }
        });
    }

    componentDidMount = () => {
        fetch('/loginInfo', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            credentials: "same-origin"
        })
        .then(e => e.json())
        .then(e => {
            console.log(e);
            this.setState({
                loggedIn: e.loggedIn
            });
        });
    }

    render() {
        const { loggedIn } = this.state;
        return(
            <Router>
                <Route exact path="/" component={() => <Enter loggedIn={loggedIn} />} />
                <Route exact path="/register-view" 
                    component={
                        (history) => 
                            (!loggedIn ? 
                                (<Register register={this.register} history={history} />)
                                : (<Redirect to="/main" />) 
                                )} />
                <Route exact path="/login-view" 
                    component={
                        (history) => 
                            (!loggedIn ? 
                                (<Login login={this.login} history={history} />)
                                : (<Redirect to="/main" />))} />
                <Route exact path="/main" component={Main} />
            </Router>
        );
    }
}

export default App;