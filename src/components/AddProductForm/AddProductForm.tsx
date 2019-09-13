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
interface CategoryProps {
  category: Category[];
}
interface ProductState {
  product: Product;
}

class AddProductForm extends React.Component<CategoryProps, ProductState> {
  // constructor(props: CategoryProps) {
  //   super(props);
  //   this.state = [
  //     {
  //       name: "",
  //       category: "",
  //       price: "",
  //       available: ""
  //     }
  //   ];
  //}

  render() {
    return (
      <>
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
                  // value={this.state}
                  // onChange={e => {
                  //   console.log(e.target.value);
                  //   this.setState({ name: e.target.value });
                  // }}
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
                  onChange={e => {
                    e.preventDefault();
                    console.log(e.target.value);
                  }}
                >
                  {this.props.category.map(category => (
                    <option key={category.categoryId}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">
                <label>Available</label>
              </div>
              <div className="col-sm-4">
                <select
                  className="form-control"
                  id="available"
                  onChange={e => {
                    e.preventDefault();
                    console.log(e.target.value);
                    // this.setState({ available: "" });
                  }}
                >
                  {availableState.map(available => (
                    <option key={available.id}>{available.name}</option>
                  ))}
                </select>
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
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-11">
                <button
                  type="submit"
                  className="btn btn-outline-primary my-2 my-sm-0"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddProductForm;
