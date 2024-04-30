import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {2

  const addToCartHandler=()=>{

  }
  return (
    <div className="home">
      <section></section>

      <h1>Lastest Collection from ANOKHI
      <Link to={"/search"} className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard productId="vjihvbihbr" name="MacBook" price={45454545} stock={435} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg"/>
      </main>
    </div>
  )
}

export default Home