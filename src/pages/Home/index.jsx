import { Search } from "../../components/Search"
import ProductList from "../../components/ProductListNEW"
import useProductStore from "../../components/store/products";
import Cart from "../../components/Cart";


const Home = () => {
  const {cart, clearCart, totalNumberOfItems} = useProductStore(); 
  console.log(cart)

  return (
    <div className="mx-auto max-w-screen-xl flex">
      <div className="w-[50%]">
        <h1>Home</h1>
        <button onClick={clearCart} className="bg-gray-700 text-white font-bold py-1 px-3 rounded">Clear Cart</button>
        {console.log(cart)}
        <div>Cart items: {totalNumberOfItems}</div>
        <ProductList />
      </div>
      <div className="w-[50%] bg-orange-200 p-4">
        <Cart />
      </div>
   
   

    </div>
  )
}

export default Home
