import React, { Component } from 'react';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import MemoNav from 'components/MemoNav';
import MemoList from 'components/MemoList';
import MemoView from 'components/MemoView';

class Main extends Component {
    state = {
        memos: []
    }

    getMemos = () => {
        fetch('/memoList', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            credentials: "same-origin"
        })
        .then(e => e.json())
        .then(e => {
            console.log(e);
            this.setState({
                memos: e.memos
            });
        });
    }

    writeMemo = (title, content) => {
        fetch('/memo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        .then(e => e.json())
        .then(e => {
            const memo = {
                id: e.id,
                title: e.title,
                content: e.content
            }
            const { memos } = this.state;
            this.setState({
                memos: [memo, ...memos]
            });
        });
    }

    componentDidMount() {
        this.getMemos();
    }

    render() {
        const cx = classNames.bind(styles);
        const { memos } = this.state;
        return(
            <div className={cx('main')}>
                <MemoNav />
                <MemoList memos={memos} />
                <MemoView write={this.writeMemo} />
            </div>
        );
    }
}


export default Main;