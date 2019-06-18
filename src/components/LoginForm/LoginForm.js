import React, { Component } from 'react';
import styles from './LoginForm.module.scss';
import classNames from 'classnames/bind';


class RegisterForm extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('login-form')}>
                <h1>Nevernote</h1>
                <h5>뭐든지 적어보아요</h5>
                <div className={cx('form')}>
                    <div className={cx('input')}><input type='text' /></div>
                    <div className={cx('input')}><input type='password' /></div>
                    <div className={cx('button')}>로그인</div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('text')}>
                        계정이 없으세요?
                    </div>
                    <div className={cx('register')} onClick={() => {window.location.href = 'register'}}>
                        계정 만들기
                    </div>
                </div>
            </div>
        );
    }

}

export default RegisterForm;