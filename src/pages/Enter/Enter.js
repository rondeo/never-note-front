import React, { Component } from 'react';
import Header from 'components/Header';
import Content from 'components/Content';
import classNames from 'classnames/bind';
import styles from './Enter.module.scss';

class Enter extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('enter')}>
                <Header></Header>
                <Content></Content>
            </div>
        )
    }
}

export default Enter;