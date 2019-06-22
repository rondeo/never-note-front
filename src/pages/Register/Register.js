import React, { Component } from 'react';
import RegisterForm from 'components/RegisterForm';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';

class Register extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        if(e.target.name === 'username') {
            this.setState({
                username: e.target.value,
            })
        } else {
            this.setState({
                password: e.target.value,
            })
        }
    }

    render() {
        const cx = classNames.bind(styles);
        const { register, history } = this.props;
        const { username, password } = this.state;
        return(
            <div className={cx('register')}>
                <RegisterForm 
                    register={() => {  
                    register(username, password, history);
                    }}
                    onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Register;