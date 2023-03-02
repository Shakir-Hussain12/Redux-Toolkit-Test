/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../Features/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
    const dispatch = useDispatch();
     const { cartItems, amount, total } = useSelector((store) => store.cart);
     
     if(amount < 1) {
        return (
            <section className="cart">
            <header>
                <h2>Your Bag</h2>
                <h4 className="empty-cart">
                    is Currently Empty
                </h4>
            </header>
        </section>
        )
     }

     return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                { cartItems.map((item) => (
                    <CartItem key={item.id} {...item}  />
                ))}
            </div>
            <footer>
                <hr /> 
                <div className="cart-total">
                    <h4>Total <span>${total.toFixed(2)}</span></h4>
                </div>
                <button className="btn clear-btn" 
                    onClick={() => {
                        dispatch(openModal())}
                }>
                    Clear cart
                </button>
            </footer>
        </section>
     )
}

export default CartContainer;