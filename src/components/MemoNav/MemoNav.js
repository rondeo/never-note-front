import React, { Component } from 'react';
import styles from './MemoNav.module.scss';
import classNames from 'classnames/bind';

class MemoNav extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('memo-nav')}>
                <ul className={cx('upper-nav')}>
                    <li><i class="fas fa-plus"></i></li>
                    <li><i class="fas fa-search"></i></li>
                </ul>

                <ul className={cx('lower-nav')}>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-sticky-note"></i></li>
                    <li><i class="fas fa-book"></i></li>
                    <li><i class="fas fa-tag"></i></li>
                </ul>

                <div className={cx('account')}>
                    account
                </div>
            </div>
        );
    }
}

export default MemoNav;