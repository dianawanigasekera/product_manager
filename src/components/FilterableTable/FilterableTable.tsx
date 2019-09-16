import React from "react";
import FilterBar from "../FilterBar";
import ProductTable from "../ProductTable";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";

interface Props {
  products: Product[];
  categories: Category[];
  onDelete: (id: number) => void;
}

interface State {
  filteredProducts?: Product[];
}

class FilterableTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      filteredProducts: undefined
    };
  }

  updateFilter(filter: string) {
    if (filter) {
      this.setState({
        filteredProducts: this.props.products.filter(
          p => p.name.toLowerCase().indexOf(filter) >= 0
        )
      });
    } else {
      this.setState({ filteredProducts: undefined });
    }
  }

  render() {
    return (
      <>
        <FilterBar onChange={f => this.updateFilter(f)} />
        <ProductTable
          products={this.state.filteredProducts || this.props.products}
          categories={this.props.categories}
          onDelete={this.props.onDelete}
        />
      </>
    );
  }
}

export default FilterableTable;
