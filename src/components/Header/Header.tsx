import React from "react";
import {Link} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">Product Manager</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/add_product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add_category">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product_list">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Header;
