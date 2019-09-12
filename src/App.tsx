import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container-fluid">
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
