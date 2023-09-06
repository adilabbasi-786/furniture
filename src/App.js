import Banner from "./components/Banner";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBlogPage from "./pages/SingleBlogPage";
import LoginPage from "./pages/LoginPage";
import AllProducts from "./pages/AllProducts";
import SingleProductPage from "./pages/SingleProductPage";
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singleblog/:id" element={<SingleBlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/singleproduct/:id" element={<SingleProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
