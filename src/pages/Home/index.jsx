
import ProductList from "../../components/ProductList"
import useProductStore from "../../components/store/products";
import Cart from "../../components/Cart";
import SearchBar from "../../components/SearchNew/SearchBar";


const Home = () => {
  const {cart, clearCart, getTotalNumberOfItemsInCart} = useProductStore(); 
  console.log(cart)

  return (
    <div className="mx-auto max-w-screen">
      <div className="">
        <h1>Home</h1>
        <ProductList />
      </div>
   
   
   

    </div>
  )
}

export default Home
