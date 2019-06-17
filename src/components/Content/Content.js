import React, { Component } from 'react';
import styles from './Content.scss';
import classNames from 'classnames/bind';

class Content extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('content')}>
                <h1>네버노트에 오신 것을 환영합니다!</h1>
            </div>
        )
    }
}

export default Content;