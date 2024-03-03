import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import CurrentPage from "./components/CurrentPage";
import Header from "./components/Header";
import Headphones from "./components/headphones/Headphones";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/home" element={<Body />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/:id" element={<CurrentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
