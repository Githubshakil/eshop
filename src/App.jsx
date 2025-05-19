import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CommonLayout from "./components/commonlayout/CommonLayout";
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'


// language changer
import '../i18n';


function App() {
  

  return (
    <Provider store={store}>
     <Routes>
      <Route path="/" element={<CommonLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/product-List" element={<ProductList />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Route>
    </Routes>
    </Provider>
  )
}

export default App
