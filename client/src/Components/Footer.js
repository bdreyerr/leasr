import React from 'react';
import {Link} from 'react-router-dom';
import Team from './img/users-solid.svg';
import Question from './img/question-solid.svg';
import Contact from './img/envelope-solid.svg';
import HashTag from './img/hashtag-solid.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer color="grey" className="page-footer font-small stylish-color-dark pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Leasr</h5>
                        <p>Student focused subletting made easy. Find and post leases to help students worry less, and accomplish more. Find a Leasr for the Summer, term abroad, or any other reason.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>
                        <ul className="list-unstyled">
                            <li>
                                <img className="pr-1 thumbnail-image" 
                                    src={Question}
                                    width="20"
                                    height="20"
                                    alt="Team icon"
                                />
                                <a className="text-success" href="#!">What We're About</a>
                            </li>
                            <li>
                                <img className="pr-1 thumbnail-image" 
                                    src={Team}
                                    width="20"
                                    height="20"
                                    alt="Team icon"
                                />
                                <a className="text-success" href="#!">Meet the Team</a>
                            </li>
                            <li>
                                <img className="pr-1 thumbnail-image" 
                                    src={HashTag}
                                    width="20"
                                    height="20"
                                    alt="Team icon"
                                />
                                <a className="text-success" href="#!">Social Media</a>
                            </li>
                            <li>
                                <img className="pr-1 thumbnail-image" 
                                    src={Contact}
                                    width="20"
                                    height="20"
                                    alt="Team icon"
                                />
                                <a className="text-success" href="#!">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Support</h5>
                        <ul className="list-unstyled">
                            <li>
                            <a className="text-success" href="#!">Troubleshoot</a>
                            </li>
                            <li>
                            <a className="text-success" href="#!">Common Questions</a>
                            </li>
                            <li>
                            <a className="text-success" href="#!">Report a Bug</a>
                            </li>
                            <li>
                            <a className="text-success" href="#!">Get Help</a>
                            </li>
                        </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
                        <ul className="list-unstyled">
                            <li>
                            <a className="text-success" href="#!">Create a Lease</a>
                            </li>
                            <li>
                            <a className="text-success" href="#!">Terms of Use</a>
                            </li>
                            <li>
                            <a className="text-success" href="#!">Privacy Policy</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <Link className="btn btn-success btn-rounded" to="/register">Become a Leasr!</Link>
                    </li>
                </ul>
                <hr />
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#"> Leasr.com</a>
                </div>
            </footer>
        );
    }
}

export default Footer;