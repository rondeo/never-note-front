import React, { Component } from 'react';
import styles from './MemoList.module.scss';
import classNames from 'classnames/bind';

class MemoList extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('memo-list')}>
            
            </div>
        );
    }
}

export default MemoList;