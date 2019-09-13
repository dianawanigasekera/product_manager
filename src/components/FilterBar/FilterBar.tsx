import React from "react";

class FilterBar extends React.Component {
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
