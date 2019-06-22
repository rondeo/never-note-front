import React, { Component } from 'react';
import styles from './MemoItem.module.scss';
import classNames from 'classnames/bind';

export default class extends Component {
    render() {
        const { title, content } = this.props;
        const cx = classNames.bind(styles);
        return(
            <div className={cx('item')}>
                <div className={cx('title')}>
                    {title}
                </div>
                <div className={cx('content')}>
                    {content}
                </div>
            </div>
        );
    }
}