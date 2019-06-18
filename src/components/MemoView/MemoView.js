import React, { Component } from 'react';
import styles from './MemoView.module.scss';
import classNames from 'classnames/bind';

class MemoView extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('memo-view')}>
            </div>
        );
    }
}

export default MemoView;