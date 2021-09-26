import React, { useEffect, useState } from 'react';
import './Donate.css';
import Donnar from '../Donnar/Donnar';
import Cart from '../Cart/Cart';
const Donate = () => {
    const [donnars, setDonnars] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(donnars);
    useEffect(() => {
        fetch('./Fundly.json')
            .then(res => res.json())
            .then(data => setDonnars(data));
    }, []);

    const handleDonateToCart = (donnar) => {
        const newCart = [...cart, donnar];
        setCart(newCart);
    }

    return (
        <div className="donate-container">
            <div className="donner-container" class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    donnars.map(donnar => <Donnar
                        key={donnar.id}
                        donnar={donnar}
                        handleDonateToCart={handleDonateToCart}
                    >
                    </Donnar>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Donate;