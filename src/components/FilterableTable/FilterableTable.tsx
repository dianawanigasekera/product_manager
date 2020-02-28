import React from "react";
import FilterBar from "../FilterBar";
import ProductTable from "../ProductTable";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { setCategoriesList } from '../../store/category/categoryActions';
import { Subscription } from 'rxjs';
import { dataManager } from '../../store/dataManager/dataManager';

interface Props {
  products: Product[];
  categories: Category[];
  setCategoriesList: (c: Category[]) => void;
}

interface State {
  filteredProducts?: Product[];
}

class FilterableTableComponent extends React.Component<Props, State> {
  private loadDataSubscription?: Subscription;

  constructor(props: Props) {
    super(props);
    this.state = {
      filteredProducts: undefined,
    };
  }

  componentDidMount() {
    this.loadDataSubscription = dataManager.loadCategoriesList().subscribe(
        c => {
          this.props.setCategoriesList(c);
        },
    );
  }

  componentWillUnmount() {
    if (this.loadDataSubscription) {
      this.loadDataSubscription.unsubscribe();
    }
  }

  updateFilter(filter: string) {
    if (filter) {
      this.setState({
        filteredProducts: this.props.products.filter(
            p => p.name.toLowerCase().indexOf(filter) >= 0,
        ),
      });
    } else {
      this.setState({filteredProducts: undefined});
    }
  }

  render() {
    const p = this.props;
    const s = this.state;
    return (
        <>
          <FilterBar onChange={f => this.updateFilter(f)}/>
          <ProductTable
              products={s.filteredProducts || p.products}
              categories={p.categories}
          />
        </>
    );
  }
}


function mapStateToProps(state: ApplicationState) {
  return {
    products: state.products.products,
    categories: state.categories.categories,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setCategoriesList: (c: Category[]) => dispatch(setCategoriesList(c)),
  }
}

const FilterableTable = connect(mapStateToProps, mapDispatchToProps)(FilterableTableComponent);

export default FilterableTable;
