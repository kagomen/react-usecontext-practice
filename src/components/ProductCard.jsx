import { useContext } from "react"
import CartContext from "../context/CartContext"

const ProductCard = (props) => {
  const { addItems } = useContext(CartContext)
  function onAdd() {
    addItems(props.title, props.price)
    alert(`${props.title}をカートに追加しました`)
  }
  return (
    <div className="bg-orange-200 my-2 p-2">
      <p>商品名: {props.title}</p>
      <p>価格: {props.price}</p>
      <button onClick={onAdd} className="bg-stone-400 p-1">カートに追加</button>
    </div>
  )
}

export default ProductCard