import React, {useState} from 'react';
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import { ControlLabel } from 'react';
//so signup should instantly take you to a page that 
//lets you create an account
//then at the bottom of the page there should be a link
//that leads you to be able to sign into your account if already have one

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
            <div className="p-5 auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    <FormGroup className="p-2" controlId="email" bsSize="large">
                        <FormControl
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </FormGroup>

                    <FormGroup  className="p-2" controlId="password" bsSize="large">
                        <FormControl
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter password"
                        />
                    </FormGroup>

                    <Form.Group controlId="formBasicCheckbox">
                    {['checkbox'].map(type => (
                            <div key={`custom-${type}`} className="mb-3">
                            <Form.Check 
                                custom
                                type={type}
                                id={`custom-${type}`}
                                label={`Remember Me`}
                            />
                            </div>
                        ))}
                    </Form.Group>

                    <Button block className="p-2 pb-0 btn-success" bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                    </Button>
                    <p className="forgot-password text-right text-success">
                        <Link className="text-success" to="#">Forgot password?</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

// <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
            //     <div className="p-5 auth-inner">
            //         <form>
            //             <h3>Sign In</h3>

            //             <div className="p-2 form-group">
            //                 <input type="email" className="form-control" placeholder="Enter email" />
            //             </div>

            //             <div className="p-2 form-group">
            //                 <input type="password" className="form-control" placeholder="Enter password" />
            //             </div>

            //             <div className="p-2 form-group">
            //                 <div className="custom-control custom-checkbox">
            //                     <input type="checkbox" className="custom-control-input" id="customCheck1" />
            //                     <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            //                 </div>
            //             </div>

            //             <button type="submit" className="p-2 pb-0 btn btn-success btn-block">Submit</button>
            //             <p className="forgot-password text-right text-success">
            //                 <Link className="text-success" href="#">Forgot password?</Link>
            //             </p>
            //         </form>
            //     </div>
            // </div>


// export default Login;