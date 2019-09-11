import React from "react";
import FilterBar from "../FilterBar";
import ProductTable from "../ProductTable";
import AddProductForm from "../AddProductForm";

class FilterableTable extends React.Component {
  render() {
    return (
      <>
        <FilterBar />
      </>
    );
  }
}

export default FilterableTable;
