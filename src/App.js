import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import NavBar from "./Components/NavBar";
import { CartProvider } from "./Context/CartContext";
import CartListContainer from "./Components/CartListContainer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/:categoryName" element={<ItemListContainer />} />
            <Route path="/book/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartListContainer />} />
          </Routes>
          <Toaster/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
