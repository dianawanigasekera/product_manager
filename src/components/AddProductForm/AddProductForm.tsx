import React from "react";
import {Category} from "../../model/Category";
import {Product} from "../../model/Product";
import {ApplicationState} from "../../store";
import {connect} from "react-redux";
import {addProduct} from "../../store/product/productActions"

interface AddProductFormProps {
    category: Category[];
    onAddProduct: (product: Product) => void;
}

interface AddProductFormState extends Product {
    extraInfo: string;
    showMessage: boolean;
}

// empty Product
const emptyProduct = {
    id: 0,
    name: "",
    categoryId: 1,
    price: 0,
    available: false,
    date: ""
};

class AddProductFormComponent extends React.Component<AddProductFormProps,
    AddProductFormState> {
    constructor(props: AddProductFormProps) {
        super(props);
        this.state = {
            ...emptyProduct,
            extraInfo: "ciao",
            showMessage: false
        };
    }

    render() {
        return (
            <div className="col-sm-8" style={{padding: "40px"}}>
                <form>
                    <div className="form-group row">
                        <div className="col-sm-2">
                            <label>Name:</label>
                        </div>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={this.state.name}
                                onChange={e => {
                                    this.setState({name: e.target.value});
                                }}
                                placeholder="Enter the product name"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2">
                            <label>Category</label>
                        </div>
                        <div className="col-sm-4">
                            <select
                                className="form-control"
                                id="category"
                                value={this.state.categoryId}
                                onChange={e =>
                                    this.setState({categoryId: Number(e.target.value)})
                                }
                            >
                                {this.props.category.map(category => (
                                    <option key={category.categoryId} value={category.categoryId}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2">
                            <label className="form-check-label">Available</label>
                        </div>
                        <div className="col-sm-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={this.state.available}
                                onChange={e => {
                                    const target = e.target;
                                    const value =
                                        target.type === "checkbox" ? target.checked : target.value;
                                    this.setState({available: Boolean(value)});
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2">
                            <label>Price</label>
                        </div>
                        <div className="col-sm-4">
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder="Enter the price"
                                value={this.state.price}
                                onChange={e => this.setState({price: Number(e.target.value)})}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11">
                            <button
                                type="submit"
                                disabled={!this.state.name || !this.state.price}
                                className="btn btn-outline-primary my-2 my-sm-0"
                                onClick={e => {
                                    e.preventDefault();
                                    this.props.onAddProduct({
                                        ...this.state,
                                        date: new Date().toLocaleDateString(),
                                    });
                                    this.setState({
                                        ...emptyProduct,
                                        showMessage: true
                                    });
                                    setTimeout(() => this.setState({showMessage: false}), 5000);
                                }}
                            >
                                Add product
                            </button>
                        </div>
                    </div>
                    <div className="form-group row" style={{marginTop: "20px"}}>
                        <div className="col-sm-11">
                            {this.state.showMessage ? <div className="alert alert-success" role="alert">
                                Successfully added to the Product list!</div> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


function mapStateToProps(state: ApplicationState) {
    return {
        products: state.storage.products,
        category: state.categories.category
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onAddProduct: (p: Product) => dispatch(addProduct(p)),
    };
}

const AddProductForm = connect(mapStateToProps, mapDispatchToProps)(AddProductFormComponent);

export default AddProductForm;
