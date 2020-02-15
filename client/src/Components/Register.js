import React, {useState} from 'react';
import { Button, FormGroup, FormControl, HelpBlock, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import LoaderButton from "../components/LoaderButton";
import { useFormFields } from "../libs/hooksLib";

export default function Login(props) {
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: ""
    });
    const [newUser, setNewUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    function validateForm() {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }
    
    function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
    
        setIsLoading(true);
    
        setNewUser("test");
    
        setIsLoading(false);
    }
    
    async function handleConfirmationSubmit(event) {
        event.preventDefault();
    
        setIsLoading(true);
    }
    
    function renderConfirmationForm() {
        return (
          <form onSubmit={handleConfirmationSubmit}>
            <FormGroup controlId="confirmationCode" bsSize="large">
              <ControlLabel>Confirmation Code</ControlLabel>
              <FormControl
                autoFocus
                type="tel"
                onChange={handleFieldChange}
                value={fields.confirmationCode}
              />
              <HelpBlock>Please check your email for the code.</HelpBlock>
            </FormGroup>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              disabled={!validateConfirmationForm()}
            >
              Verify
            </LoaderButton>
          </form>
        );
    }

    function renderForm() {
        return (
            <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
                <div className="p-5 auth-inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Sign Up</h3>
                        <FormGroup className="p-2" controlId="email" bsSize="large">
                            <FormControl
                                autoFocus
                                type="email"
                                value={fields.email}
                                onChange={handleFieldChange}
                                placeholder="Enter email"
                            />
                        </FormGroup>

                        <FormGroup  className="p-2" controlId="password" bsSize="large">
                        <FormControl
                            type="password"
                            value={fields.password}
                            onChange={handleFieldChange}
                            placeholder="Enter Password"
                        />
                        </FormGroup>

                        <FormGroup  className="p-2" controlId="password" bsSize="large">
                            <FormControl
                                type="password"
                                onChange={handleFieldChange}
                                value={fields.confirmPassword}
                                placeholder="Re-enter password"
                            />
                        </FormGroup>

                        <LoaderButton block className="p-2 pb-0 btn-success" bsSize="large" isLoading={isLoading} disabled={!validateForm()} type="submit">
                        Sign Up
                        </LoaderButton>

                        <p className="forgot-password text-success text-right">
                            <Link className="text-success" to="/login">Already registered? Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
    
    return (
        <div className="Signup">
          {newUser === null ? renderForm() : renderConfirmationForm()}
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