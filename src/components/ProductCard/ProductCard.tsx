import React from "react";
import {Product} from "../../model/Product";
import { RouteChildrenProps } from "react-router";
import {ApplicationState} from "../../store";
import {connect} from "react-redux";


interface ThingWithId {id: string}

interface Props extends RouteChildrenProps<ThingWithId>{
    product: Product | undefined;
}

class ProductCardComponent extends React.Component<Props>{
    render(){
        return (
            <div className="container">
                <div className="col-md-6">
                    <div className="card" style={{width: "18rem", marginTop:"100px"}}>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.match!.params.id}</h5>
                            <p className="card-text">Name: {this.props.product!.name}</p>
                            <h6 className="card-subtitle mb-2 text-muted">CategoryId: {this.props.product!.categoryId}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Price: € {this.props.product!.price}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Available in stock: {this.props.product!.available ? (
                                <i style={{ color: "#39ff14" }} className="fa fa-check"></i>
                            ): (
                                <i style={{ color: "red" }} className="fa fa-times"></i>
                            )}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: ApplicationState, ownProps:RouteChildrenProps<ThingWithId>) {
    const id = Number(ownProps.match!.params.id);
    const productObj =  state.storage.products.find(p => p.id === id);
    return {
        product:productObj
    };
}

export default connect(mapStateToProps)(ProductCardComponent);

