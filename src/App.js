import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Enter, Register, Login } from 'pages';

class App extends Component {
    render() {
        return(
            <div className="app">
                <Route exact path="/" component={Enter} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </div>
        );
    }
}

export default App;