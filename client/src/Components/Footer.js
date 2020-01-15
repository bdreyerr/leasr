import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer color="grey" className="page-footer font-small stylish-color-dark pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#!">Link 1</a>
                            </li>
                            <li>
                            <a href="#!">Link 2</a>
                            </li>
                            <li>
                            <a href="#!">Link 3</a>
                            </li>
                            <li>
                            <a href="#!">Link 4</a>
                            </li>
                        </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#!">Link 1</a>
                            </li>
                            <li>
                            <a href="#!">Link 2</a>
                            </li>
                            <li>
                            <a href="#!">Link 3</a>
                            </li>
                            <li>
                            <a href="#!">Link 4</a>
                            </li>
                        </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#!">Link 1</a>
                            </li>
                            <li>
                            <a href="#!">Link 2</a>
                            </li>
                            <li>
                            <a href="#!">Link 3</a>
                            </li>
                            <li>
                            <a href="#!">Link 4</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <a href="#!" className="btn btn-success btn-rounded">Become a Leasr!</a>
                    </li>
                </ul>
                <hr />
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#"> Leasr.com</a>
                </div>
            </footer>

            // <footer>
            //      <div>
            //          <a href="#Home">Leasr </a>
            //          <span>&copy; 2019 Leasr.</span>
            //      </div>
            // </footer>
        );
    }
}

export default Footer;