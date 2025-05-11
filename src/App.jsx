import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-List" element={<ProductList />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/checkout-page" element={<CheckoutPage />} />
      <Route path="/blog-page" element={<BlogPage />} />
      <Route path="/contact-page" element={<ContactPage />} />
    </Routes>
    </>
  )
}

export default App
