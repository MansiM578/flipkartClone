import React from "react";
import Header from "components/header/Header";
import ProductList from "components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ProductDisplay from "pages/ProductDisplay";
import Cart from "pages/ShowPage";

import OrderSummary from "pages/OrderSummary";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderSummary />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
