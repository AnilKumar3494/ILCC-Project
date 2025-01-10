import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Sermons from "./pages/Sermons";
// import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import History from "./pages/History";
import Masonary from "./components/Masonary";

// import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />

      <ThemeSwitcher />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/masonary" element={<Masonary />} /> */}
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
