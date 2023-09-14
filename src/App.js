import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import Createvendor from "./components/users/Createvendor"

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/order" element={<OrderDetailScreen />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/users" element={<UsersScreen />} />
        <Route path="/product/:id/edit" element={<ProductEditScreen />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/create-vendor" element={<Createvendor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
