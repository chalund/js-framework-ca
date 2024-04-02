
import ProductList from "../../components/ProductList"
import useProductStore from "../../components/store/products";
import HeroSection from "../../components/HeroSection";




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
