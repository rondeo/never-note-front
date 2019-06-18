import React, { Component } from 'react';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import MemoNav from 'components/MemoNav';
import MemoList from 'components/MemoList';
import MemoView from 'components/MemoView';

class Main extends Component {
    render() {
        const cx = classNames.bind(styles);
        return(
            <div className={cx('main')}>
                <MemoNav />
                <MemoList />
                <MemoView />
            </div>
        );
    }
}


export default Main;