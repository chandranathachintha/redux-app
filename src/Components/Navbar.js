import React from 'react';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cart = useSelector((state)=>state.cart.cartValues.length)
    const totalPrice = useSelector((state)=>state.cart.totalPrice)
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <form className="container-fluid justify-content-center">
            <span className="btn btn-primary me-2" type="button">Cart Items - {cart}</span> &nbsp;
            <span className="btn btn-primary me-2" type="button">Total Price - {totalPrice}</span>
         </form>
        </nav>
    </div>
  );
}

export default Navbar;
