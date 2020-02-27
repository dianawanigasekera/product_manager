import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Switch } from "react-router-dom";
import AddCategoryForm from "./components/AddCategoryForm/AddCategoryForm";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import FilterableTable from "./components/FilterableTable/FilterableTable";
import Home from "./components/Home/Home";
import ProductCard from "./components/ProductCard/ProductCard";
import ErrorComponent from "./components/ErrorComponent/Error";
import React from "react";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";


export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <div className="container-fluid">
                        <Provider store={store}>
                            <div>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/add_category" component={AddCategoryForm}/>
                                    <Route path="/add_product" component={AddProductForm}/>
                                    <Route path="/product_list" component={FilterableTable}/>
                                    <Route path="/register_form" component={RegisterForm}/>
                                    <Route path="/product/:id" component={ProductCard}/>
                                    <Route component={ErrorComponent}/>
                                </Switch>
                            </div>
                        </Provider>
                    </div>
                </div>
            </div>


        );
    };
}

export default App;
