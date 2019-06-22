import React, { Component } from 'react';
import styles from './MemoList.module.scss';
import classNames from 'classnames/bind';
import MemoItem from 'components/MemoItem';

class MemoList extends Component {
    render() {
        const cx = classNames.bind(styles);
        const { memos } = this.props;
        
        const memoList = memos.map(memo => (
            <MemoItem title={memo.title} content={memo.content} key={memo.id} />
        ));
        return(
            <div className={cx('memo-list')}>
                {memoList}
            </div>
        );
    }
}

export default MemoList;