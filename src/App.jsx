import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OrderProvider } from "./context/OrderContext";
import HomePage from "./pages/HomePage";
import OrderPizza from "./pages/OrderPizza";
import Success from "./pages/Success";

const App = () => {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-pizza" element={<OrderPizza />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
};

export default App;
