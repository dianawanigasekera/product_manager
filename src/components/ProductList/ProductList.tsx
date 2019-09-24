import React from "react";
import AddProductForm from "../AddProductForm";
import AddCategoryForm from "../AddCategoryForm";
import FilterableTable from "../FilterableTable";


interface Props {}
interface State {
}

class ProductList extends React.Component<Props, State> {

  render() {
    return (
      <div>
        <AddProductForm
        />
        <AddCategoryForm
        />
        <FilterableTable
        />
      </div>
    );
  }
}

export default ProductList;
