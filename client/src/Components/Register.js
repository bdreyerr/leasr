import React, {useState} from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Login(props) {
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, checkPassword] = useState("");

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
                    <h3>Sign Up</h3>
                    <FormGroup className="p-2" controlId="email" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            value={firstName}
                            onChange={e => setFirst(e.target.value)}
                            placeholder="First Name"
                        />
                    </FormGroup>

                    <FormGroup className="p-2" controlId="email" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            value={lastName}
                            onChange={e => setLast(e.target.value)}
                            placeholder="Last Name"
                        />
                    </FormGroup>

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

                    <FormGroup  className="p-2" controlId="password" bsSize="large">
                        <FormControl
                            value={repassword}
                            onChange={e => checkPassword(e.target.value)}
                            type="password"
                            placeholder="Re-enter password"
                        />
                    </FormGroup>

                    <Button block className="p-2 pb-0 btn-success" bsSize="large" disabled={!validateForm()} type="submit">
                    Sign Up
                    </Button>

                    <p className="forgot-password text-success text-right">
                        <Link className="text-success" to="/login">Already registered? Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}






// import React from 'react';
// import {Link} from 'react-router-dom';
// //so signup should instantly take you to a page that 
// //lets you create an account
// //then at the bottom of the page there should be a link
// //that leads you to be able to sign into your account if already have one
// class Register extends React.Component{
//     render(){
//         return(
//             <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
//                 <div className="p-5 auth-inner">
//                     <form>
//                         <h3>Sign Up</h3>

//                         <div className="p-2 form-group">
//                             <input type="text" className="form-control" placeholder="First name" />
//                         </div>

//                         <div className="p-2 form-group">
//                             <input type="text" className="form-control" placeholder="Last name" />
//                         </div>

//                         <div className="p-2 form-group">
//                             <input type="email" className="form-control" placeholder="Enter email" />
//                         </div>

//                         <div className="p-2 form-group">
//                             <input type="password" className="form-control" placeholder="Enter password" />
//                         </div>

//                         <div className="p-2 form-group">
//                             <input type="password" className="form-control" placeholder="Re-enter password" />
//                         </div>

//                         <button type="submit" className="p-2 pb-0 btn btn-success btn-block">Sign Up</button>
//                         <p className="forgot-password text-success text-right">
//                             <Link className="text-success" to="/login">Already registered? Sign in</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }


// export default Register;