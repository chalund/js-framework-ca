import ProductList from "../../components/ProductList"
import useProductStore from "../../components/store/products";
import HeroSection from "../../components/HeroSection";


export const Home = () => {
  const {cart, clearCart, getTotalNumberOfItemsInCart} = useProductStore(); 

  return (
    <div className="mx-auto max-w-screen">
      <HeroSection />
      <ProductList />
    </div>
  )
}