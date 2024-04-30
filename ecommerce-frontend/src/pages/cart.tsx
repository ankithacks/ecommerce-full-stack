import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems=[
  {
    productId: "vhlbvhbvhisbv",
    photo:"https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg",
    name:"MacBook",
    price: 3000,
    quantity: 4,
    stock: 10
  }
];
const subtotal=4000;
const tax=Math.round(subtotal*0.18)
const shippingCharges=200;
const total=shippingCharges+tax+subtotal;
const discount=400;

const Cart = () => {
  const [couponCode, setCouponCode]=useState<string>("")
  const [isValidCouponCode, setIsValidCouponCode]=useState<boolean>(false)
  
  useEffect(() => {
    const timeoutid=setTimeout(() => {
      if(Math.random() > 0.5){
        setIsValidCouponCode(true)
      }
      else{
        setIsValidCouponCode(false)
      }
    }, 1000);
  
    return () => {
      clearTimeout(timeoutid)
      setIsValidCouponCode(false)
    }
  }, [couponCode])
  
  
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            // <CartItemCard
              // incrementHandler={incrementHandler}
              // decrementHandler={decrementHandler}
              // removeHandler={removeHandler}
              // key={idx}
              // cartItem={i}
            // />
            <CartItem key={idx} cartItem={i}/>
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>SubTotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em>
            - ₹{discount}
          </em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input type="text" value={couponCode} placeholder="Coupon Code" onChange={(e)=>setCouponCode(e.target.value)}/>

        {couponCode && (
           isValidCouponCode ? <span className="green">₹{discount} off using Coupon code:- <code>{couponCode}</code></span> : <span className="red">InValid Coupon Code <VscError/></span>
        )}

        {
          // produc already added in cart
          cartItems.length > 0 && <Link to='/shipping'>CheckOut</Link>
        }
  
      </aside>
    </div>
  )
}

export default Cart