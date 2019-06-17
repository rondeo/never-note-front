import React, { Component } from 'react';
import styles from './RegisterForm.module.scss';
import classNames from 'classnames/bind';


class RegisterForm extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('register-form')}>
                <h1>Nevernote</h1>
                <h5>뭐든지 적어보아요</h5>
                <div className={cx('form')}>
                    <div className={cx('input')}><input type='text' /></div>
                    <div className={cx('input')}><input type='password' /></div>
                    <div className={cx('button')}>가입하기</div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('text')}>
                        이미 계정이 있으신가요?
                    </div>
                    <div className={cx('login')} onClick={() => {window.location.href = 'login'}}>
                        로그인
                    </div>
                </div>
            </div>
        );
    }

}

export default RegisterForm;