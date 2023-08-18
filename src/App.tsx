import React from "react";
import Header from "components/header/Header";
import ProductList from "components/listItems/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ProductDisplay from "pages/ProductDisplay";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
