import { ProductList } from "../../components/ProductList"
import { Search } from "../../components/Search"

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1>Home</h1>
      <ProductList />
      {/* <Search /> */}
    </div>
  )
}

export default Home
