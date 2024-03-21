import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import Home from "./pages/Home"
import ProductDetails from "./components/ProductDetails"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import { Shoppingcart } from "./pages/Shoppingcart"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="product" element={<Products />}/>
          <Route path="shoppingCart" element={<Shoppingcart />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
