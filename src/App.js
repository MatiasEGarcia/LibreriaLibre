import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/:categoryName" element={<ItemListContainer />} />
          <Route path="/book/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
