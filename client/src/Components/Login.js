import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//so signup should instantly take you to a page that 
//lets you create an account
//then at the bottom of the page there should be a link
//that leads you to be able to sign into your account if already have one
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email: "",
            password: "",
            reEnteredPassword:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(id){
        if(this.state.password !== this.state.reEnteredPassword){
            alert("Your passwords do not match!")
            //isValidForm = false
        }
    }

    render(){
        return(
            <div>
                <Form className="p-5">
                    <Form.Group className="mx-auto w-50" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mx-auto w-50" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="radio" label="Remember Me" />
                    </Form.Group>

                    <Button variant="outline-success" type="submit" onClick={this.handleClick}>
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}


export default Login;