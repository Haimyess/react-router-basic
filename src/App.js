/** @format */

import "./App.css";

// Importing components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

// React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
