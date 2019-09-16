import React from "react";
import { Category } from "../../model/Category";
import { Product } from "../../model/Product";

const availableState = [
  {
    id: 1,
    name: "Yes"
  },
  {
    id: 2,
    name: "No"
  }
];

interface AddProductFormProps {
  category: Category[];
  onAddProduct: (product: Product) => void;
}

interface AddProductFormState extends Product {
  extraInfo: string;
}

const emptyProduct = {
  id: 0,
  name: "",
  categoryId: 1,
  price: 0,
  available: false
};

class AddProductForm extends React.Component<
  AddProductFormProps,
  AddProductFormState
> {
  constructor(props: AddProductFormProps) {
    super(props);
    this.state = {
      ...emptyProduct,
      extraInfo: "ciao"
    };
  }

  render() {
    return (
      <div className="col-sm-8" style={{ padding: "40px" }}>
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
                  this.setState({ name: e.target.value });
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
                onChange={e => {
                  this.setState({ categoryId: Number(e.target.value) });
                  console.log(e.target.value);
                }}
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
              <label>Available</label>
            </div>
            <div className="col-sm-4">TODO checkbox here</div>
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
                onChange={e => {
                  this.setState({ price: Number(e.target.value) });
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-11">
              <button
                type="submit"
                className="btn btn-outline-primary my-2 my-sm-0"
                onClick={e => {
                  e.preventDefault();
                  this.props.onAddProduct({ ...this.state });
                  this.setState({
                    ...this.state,
                    ...emptyProduct
                  });
                }}
              >
                Add product
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProductForm;
