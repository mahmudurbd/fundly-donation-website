import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    for (const donnar of cart) {
        total = total + donnar.donation;

    }

    return (
        <div className="cart">
            <h5 class="text-center mb-4 mt-2">Donation Summary</h5>
            <h6 class="ms-4">Total Donation Number: {cart.length}</h6>
            <h6 class="ms-4">Total Donation: {total.toFixed(2)}</h6>
            <h6 class="ms-4 mt-3">Donnar List:</h6>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;