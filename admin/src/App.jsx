import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AddProduct from "./components/AddProduct/AddProduct";
import ListProduct from "./components/ListProduct/ListProduct";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
