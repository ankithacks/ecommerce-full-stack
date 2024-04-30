import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () =>void;
}

const server= " fjvb;ihb;";

const ProductCard = ({productId, price, name, stock, photo, handler}: ProductsProps) => {
  return (
    <div className="product-card">
      {/* <img src={`${server}/${photo}`} alt={name} /> */}
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={()=>handler()}>
          <FaPlus/>
        </button>
      </div>
    </div>
  )
}

export default ProductCard