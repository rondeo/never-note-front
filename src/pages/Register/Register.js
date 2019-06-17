import React, { Component } from 'react';
import RegisterForm from 'components/RegisterForm';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';

class Register extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('register')}>
                <RegisterForm />
            </div>
        );
    }
}

export default Register;