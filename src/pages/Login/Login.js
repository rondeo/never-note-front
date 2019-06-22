import React, { Component } from 'react';
import LoginForm from 'components/LoginForm';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        if(e.target.name === 'username') {
            this.setState({
                id: e.target.value,
            })
        } else {
            this.setState({
                password: e.target.value,
            })
        }
    }

    render() {
        const cx = classNames.bind(styles);
        const { login, history } = this.props;
        const { username, password } = this.state;
        return(
            <div className={cx('login')}>
                <LoginForm login={() => login(username, password, history)} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Login;