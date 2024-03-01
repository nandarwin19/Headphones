import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import CurrentPage from "./components/CurrentPage";
import Header from "./components/Header";
import Lenis from "@studio-freight/lenis";
import Headphones from "./components/Headphones";

const App = () => {
  // Too laggy using scroll effect. Need to fix
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   lenis.on("scroll", (e) => {
  //     // console.log(e);
  //   });

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  //   return () => cancelAnimationFrame(raf);
  // }, []);

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
