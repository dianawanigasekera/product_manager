import React from "react";
import { Product } from "../../model/Product";
import { RouteChildrenProps } from "react-router";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";


interface ThingWithId {
    id: string
}

interface Props extends RouteChildrenProps<ThingWithId> {
    product: Product | undefined;
}

class ProductCardComponent extends React.Component<Props> {
    render() {
        const p = this.props;
        const green = "#39ff14";
        const red = "#dc3545";

        return (
            <div className="container">
                <div className="col-md-6">
                    <div className="card" style={{width: "18rem", marginTop: "100px"}}>
                        <div className="card-body">
                            <h5 className="card-title">{p.match!.params.id}</h5>
                            <p className="card-text">Name: {p.product!.name}</p>
                            <h6 className="card-subtitle mb-2 text-muted">CategoryId: {p.product!.categoryId}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Price: € {p.product!.price}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Available in
                                stock: {p.product!.available ? (
                                    <i style={{color: green}} className="fa fa-check"/>
                                ) : (
                                    <i style={{color: red}} className="fa fa-times"/>
                                )}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: ApplicationState, ownProps: RouteChildrenProps<ThingWithId>) {
    const id = Number(ownProps.match!.params.id);
    const productObj = state.products.products.find(p => p.id === id);
    return {
        product: productObj,
    };
}

export default connect(mapStateToProps)(ProductCardComponent);

