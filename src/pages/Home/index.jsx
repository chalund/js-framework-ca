
import ProductList from "../../components/ProductList"
import useProductStore from "../../components/store/products";
import Cart from "../../components/Cart";
import SearchBar from "../../components/SearchNew/SearchBar";
import HeroSection from "../../components/HeroSection";
import { NewProducts } from "../../components/NewProducts";



const Home = () => {
  const {cart, clearCart, getTotalNumberOfItemsInCart} = useProductStore(); 
  console.log(cart)

  return (
    <div className="mx-auto max-w-screen">
      <HeroSection />
      <ProductList />
    </div>
  )
}

export default Home
