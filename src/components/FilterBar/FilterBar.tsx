import React from "react";

interface Props {
  onChange: (filter: string) => void;
}

interface State {
  filter: string;
}

class FilterBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      filter: ""
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
                  value={this.state.filter}
                  onChange={e => {
                    const f = (e.target.value || "").toLowerCase();
                    this.setState({ filter: f });
                    this.props.onChange(f);
                  }}
                />
              </form>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBar;
