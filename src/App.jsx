import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Menu from "./components/Menu"
import { CartProvider } from "./context/CartContext"

function App() {

  return (
    <>
      <CartProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
