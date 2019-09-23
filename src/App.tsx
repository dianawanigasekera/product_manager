import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductListContainer from "./components/ProductList";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container-fluid">
          <Provider store={store}>
            <ProductListContainer />
          </Provider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
