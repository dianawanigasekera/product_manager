import React from "react";
import { ProductState } from "../../model/ProductState";

class FilterBar extends React.Component {
  constructor(props: ProductState) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-6 offset-md-8">
            <nav className="navbar navbar-light bg-light">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  // value={this.state.name}
                  // onChange={e => {
                  //   this.setState({ name: e.target.value });
                  //   console.log(this.state.name);
                  // }}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBar;
