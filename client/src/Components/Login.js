import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//so signup should instantly take you to a page that 
//lets you create an account
//then at the bottom of the page there should be a link
//that leads you to be able to sign into your account if already have one
class Login extends React.Component{
    render(){
        return(
            <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
                <div className="p-5 auth-inner">
                    <form>
                        <h3>Sign In</h3>

                        <div className="p-2 form-group">
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="p-2 form-group">
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="p-2 form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="p-2 pb-0 btn btn-success btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a className="text-success" href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}


export default Login;