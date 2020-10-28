import React, { Component } from 'react';
import { Form, FormGroup } from 'rsuite';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import 'rsuite/lib/styles/index.less';
import '../asset/css/Login.css';


export class Login extends Component {
 
    state = {
        username: "",
        password: "",
        user: {}
    }


    // Log in fetch
    loginHandler = () => {
        fetch("http://localhost:3000/api/v1/login", {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                localStorage.setItem("data", data)
                localStorage.setItem("user", data.user)
                localStorage.setItem("username", data.user.username)
                localStorage.setItem("name", data.user.name)
                localStorage.setItem("userId", data.user.id)
                console.log(data.user.username)
                this.setState( () => ({ user: data.user }), () => this.props.history.push('/'))
            })
    }

    
    // form handling
    handleChange = (event) => {
        event.persist()
        this.setState(()=> ({
            [event.target.name]: event.target.value
        }))
    }
 
    render() {

        return (

        /* login form */
        <>

        <div className="bottom-login-form">

            <Form layout="horizontal">

        
        {/* username */}
                <FormGroup>
                    <input 
                        name="username" 
                        className="login-form"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        onKeyPress={this.handleNameKeyPress}
                        />
                </FormGroup>
            
        {/* password */}
                <FormGroup>
                    <input 
                        name="password" 
                        className="login-form"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        onKeyPress={this.handlePassKeyPress}
                        />
                </FormGroup>
            
        {/* submit button */}
                <div className={this.state.dobClicked ? "login-button-active" : "login-button" }>
                    <Button onClick={this.loginHandler} variant="contained">Submit</Button>
                </div>

            </Form>
        </div>
        <h1>hi</h1>
        </>
        )
    }
}

export default withRouter(Login);