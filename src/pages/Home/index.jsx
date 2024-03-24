import { Search } from "../../components/Search"
import ProductList from "../../components/ProductListNEW"
import useProductStore from "../../components/store/products";
import Cart from "../../components/Cart";


const Home = () => {
  const {cart, clearCart, getTotalNumberOfItemsInCart} = useProductStore(); 
  console.log(cart)

  return (
    <div className="mx-auto max-w-screen-xl flex">
      <div className="">
        <h1>Home</h1>
        <ProductList />
      </div>
   
   
   

    </div>
  )
}

export default Home
