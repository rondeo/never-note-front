import React, { Component } from 'react';
import styles from './MemoView.module.scss';
import classNames from 'classnames/bind';

class MemoView extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        if(e.target.name === 'title') {
            this.setState({
                title: e.target.value
            });
        } else if(e.target.name === 'content') {
            this.setState({
                content: e.target.value
            });
        }
    }

    render() {
        const cx = classNames.bind(styles);
        const { write } = this.props;
        const { title, content } = this.state;
        return(
            <div className={cx('memo-view')}>
                <div className={cx('nav')}>
                </div>
                <div className={cx('header')}>

                </div>
                <div className={cx('title')} >
                    <input type="text" name='title' onChange = {this.handleChange} value={title} />
                </div>
                <div className={cx('content')}>
                    <textarea name='content' onChange = {this.handleChange} value={content} />
                </div>

                <div className={cx('write-button')} 
                    onClick={() => {
                        write(title, content);
                        this.setState({
                            title: '',
                            content: ''
                        });
                    }
                }>
                    작성
                </div>
            </div>
        );
    }
}

export default MemoView;