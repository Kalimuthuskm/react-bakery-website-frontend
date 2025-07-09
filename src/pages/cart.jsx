// src/pages/Cart.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const { 
    cartItems, 
    cartTotal, 
    clearCart,
    updateQuantity,
    removeFromCart
  } = useCart();
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate order processing
    setTimeout(() => {
      console.log('Order placed:', { 
        customer: formData, 
        items: cartItems,
        total: cartTotal + 50 // Including delivery
      });
      clearCart();
      setIsLoading(false);
      setOrderComplete(true);
    }, 1500);
  };

  if (orderComplete) {
    return (
      <div className="order-complete">
        <div className="success-message">
          <h2>Order Confirmed!</h2>
          <p>Thank you for your purchase.</p>
          <p>We've sent details to {formData.phone}</p>
          <button 
            className="continue-btn"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button 
            className="continue-btn"
            onClick={() => navigate('/')}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="item-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150?text=Product';
                  }}
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-section">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>₹50</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{cartTotal + 50}</span>
            </div>

            <form onSubmit={handleSubmit} className="checkout-form">
              <h3>Customer Details</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Delivery Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="checkout-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;