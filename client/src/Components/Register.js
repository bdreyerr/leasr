import React from 'react';
import {Link} from 'react-router-dom';
//so signup should instantly take you to a page that 
//lets you create an account
//then at the bottom of the page there should be a link
//that leads you to be able to sign into your account if already have one
class Register extends React.Component{
    render(){
        return(
            <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
                <div className="p-5 auth-inner">
                    <form>
                        <h3>Sign Up</h3>

                        <div className="p-2 form-group">
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="p-2 form-group">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="p-2 form-group">
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="p-2 form-group">
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="p-2 form-group">
                            <input type="password" className="form-control" placeholder="Re-enter password" />
                        </div>

                        <button type="submit" className="p-2 pb-0 btn btn-success btn-block">Sign Up</button>
                        <p className="forgot-password text-success text-right">
                            Already registered <Link className="text-success" href="#">sign in?</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}


export default Register;