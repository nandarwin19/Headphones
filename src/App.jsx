import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Headphones from "./pages/Headphones";
import LoginSignUp from "./pages/LoginSignUp";
import EachIteamPage from "./pages/EachIteamPage";
import Cart from "./pages/Cart";
import Reviews from "./pages/Reviews";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/home" element={<Body />} />
        <Route path="/loginout" element={<LoginSignUp />} />
        <Route path="/products" element={<Headphones />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/products/:productId" element={<EachIteamPage />} />
      </Routes>
    </Router>
  );
};

export default App;
