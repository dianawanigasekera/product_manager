import React from "react";
import {Link} from "react-router-dom";

export class Home extends React.Component {
    render(){
        return(
            <div className="jumbotron" style={{marginTop:"200px"}}>
                <h4 className="display-4">Welcome to Product Manager</h4>
                <ul >
                    <li style={{listStyle:"none"}}>
                        <Link to="/add_product">Product</Link>
                    </li>
                    <li style={{listStyle:"none"}}>
                        <Link to="/add_category">Category</Link>
                    </li>
                    <li style={{listStyle:"none"}}>
                        <Link  to="/product_list">List</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default  Home;