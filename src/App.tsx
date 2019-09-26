import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";
import {Switch, Route, Redirect} from "react-router-dom";
import AddCategoryForm from "./components/AddCategoryForm/AddCategoryForm";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import FilterableTable from "./components/FilterableTable/FilterableTable";
import Home from "./components/Home/Home";


const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="container-fluid">
                    <Provider store={store}>
                        <div>
                            <Switch>
                                <Route exact path="/"  component={Home} />
                                <Route path="/add_category" component={AddCategoryForm} />
                                <Route path="/add_product" component={AddProductForm} />
                                <Route path="/product_list" component={FilterableTable} />
                                <Redirect to="/" />
                            </Switch>
                        </div>
                    </Provider>
                </div>
            </div>
            <Footer />
        </div>


    );
};

export default App;
