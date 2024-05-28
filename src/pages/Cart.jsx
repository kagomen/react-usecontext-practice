import { useContext } from "react"
import CartContext from "../context/CartContext"

const Cart = () => {
  const { items } = useContext(CartContext)
  return (
    <div>
      <h2 className="p-2">*カート一覧*</h2>
      {items.map((item, index) => (
        <div key={index} className="bg-green-300 my-2 p-2">
          <p>商品名: {item.title}</p>
          <p>価格: {item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart