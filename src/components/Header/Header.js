import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

class Header extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    Nevernote
                </div>
                <div className={cx('nav')}>
                    메뉴
                </div>
                <div className={cx('account')}>
                        <div 
                            className={cx('register')} 
                            onClick={() => {window.location.href = 'register-view';}}>
                            가입
                        </div>
                        또는
                        <div className={cx('login')} onClick={() => {window.location.href = 'login-view';}}>
                            로그인
                        </div>
                    </div>
            </div>
        )
    }
}

export default Header;