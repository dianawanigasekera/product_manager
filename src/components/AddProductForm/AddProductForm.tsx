import React from "react";
import { Category } from "../../model/Category";

interface CategoryProps {
  category: Category[];
}

class AddProductForm extends React.Component<CategoryProps> {
  render() {
    console.log(this.props.category);
    return (
      <>
        <h4>Enter a product into the Database:</h4>
        <form>
          <div className="form-group row">
            <div className="col-sm-2">
              <label>Name:</label>
            </div>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter the product name"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2">
              <label>Category</label>
            </div>
            <div className="col-sm-4">
              <select className="form-control" id="category">
                {this.props.category.map(category => {
                  <option key={category.categoryId}>{category.name}</option>;
                })}
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default AddProductForm;
