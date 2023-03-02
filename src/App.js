import CartContainer from "./components/CartContainer";
import Navbar from "./components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calTotal } from "./Features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calTotal());
  }, [cartItems, dispatch]); 
   
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
