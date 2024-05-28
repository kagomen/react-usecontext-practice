import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"

const Menu = () => {
  const { items } = useContext(CartContext)
  return (
    <div>
      <div className="flex gap-3 bg-blue-300 p-2">
        <Link to="/" className="bg-stone-300">HOME</Link>
        <Link to="/cart" className="bg-stone-300">カート: <span>{items.length}</span></Link>
      </div>
    </div>
  )
}

export default Menu