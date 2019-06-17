import React, { Component } from 'react';
import LoginForm from 'components/LoginForm';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

class Login extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('login')}>
                <LoginForm />
            </div>
        );
    }
}

export default Login;