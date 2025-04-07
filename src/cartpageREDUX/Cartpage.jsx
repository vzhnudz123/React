import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incre, decre, removeFromCart } from './Cartslice'; // Import actions

const Cartpage = () => {
    const cart = useSelector((state) => state.cart.cart); // Get cart from Redux state
    const dispatch = useDispatch();

    // Function to handle remove action
    const handleRemove = (name) => {
        dispatch(removeFromCart({ name })); // Dispatch remove action
    };

    // Function to handle increment of item quantity
    const handleIncrement = (name) => {
        dispatch(incre({ name })); // Dispatch increment action for a specific item
    };

    // Function to handle decrement of item quantity
    const handleDecrement = (name) => {
        dispatch(decre({ name })); // Dispatch decrement action for a specific item
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt={item.name} width={50} />
                            <h3>{item.name}</h3>
                            <button onClick={() => handleRemove(item.name)}>Remove</button>

                            <div>
                                <h3>Quantity: {item.quantity}</h3>
                                <button className="bg-red-600" onClick={() => handleIncrement(item.name)}>
                                    +
                                </button>
                                <button className="bg-red-600" onClick={() => handleDecrement(item.name)}>
                                    -
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cartpage;
