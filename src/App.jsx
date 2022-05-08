import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Account from "./pages/Account";
import UserOrder from "./pages/UserOrder";
import Order from "./pages/Order";
import Admin from "./pages/Admin";
import NotAuthorised from "./pages/NotAuthorised";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Nutrition from "./pages/Nutrition";

const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={user === null ? <Navigate to="/login" /> :<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>}/>
        <Route path="/account" element={user === null ? <Navigate to="/login" /> :<Account/>}/>
        <Route path="/account/orders" element={<UserOrder/>}/>
        <Route
            path="/order/:id"
            element={user === null ? <Navigate to="/login" /> : <Order />}
          ></Route>
        <Route path="/account/admin" element={user?.isAdmin === false ? <Navigate to="/notauthorised" /> :<Admin/>}/>
        <Route path="/notauthorised" element={<NotAuthorised/>}/>
        <Route path="/nutrition" element={<Nutrition/>}/>
      </Routes>
    </Router>
  );
};

export default App;