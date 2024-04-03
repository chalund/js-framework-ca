import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import Home from "./pages/Home"

import Contact from "./pages/Contact"
import { Shoppingcart } from "./pages/Shoppingcart"
import Checkout from "./pages/Success"
import ProductDetails from "./pages/ProductDetailsPage"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="shoppingCart" element={<Shoppingcart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
