import React from "react";
import FilterBar from "../FilterBar";
import ProductTable from "../ProductTable";
import { MultiProductProp } from "../../model/ProductProp";

class FilterableTable extends React.Component<MultiProductProp> {
  render() {
    console.log(this.props.products);
    return (
      <>
        <FilterBar />
        <ProductTable products={this.props.products} />
      </>
    );
  }
}

export default FilterableTable;
