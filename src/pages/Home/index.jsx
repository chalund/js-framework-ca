import { Search } from "../../components/Search"
import ProductList from "../../components/ProductListNEW"
import useProductStore from "../../components/store/products";


const Home = () => {
  const {cart} = useProductStore(); 

  return (
    <div className="mx-auto max-w-screen-xl">
      <h1>Home</h1>
      <div>Cart items: {cart.length}</div>
      <ProductList />
      {/* <Search /> */}
   

    </div>
  )
}

export default Home
