import { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useCart } from '../../context/CartContext';
import './NavBar.css';
import logo from '../../assets/Logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Side - Logo and Shop Name */}
        <RouterLink to="/" className="nav-left" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="SKM Bakery Logo"
            className="logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/50?text=SKM';
            }}
          />
          <h1 className="shop-name">SKM Bakery</h1>
        </RouterLink>

        {/* Right Side - Navigation Links */}
        <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
          <RouterLink to="/" className="nav-link" onClick={closeMobileMenu}>Home</RouterLink>

          <ScrollLink
            to="special"
            smooth={true}
            offset={-50} // adjust if header overlaps
            duration={600}
            className="nav-link"
            activeClass="active"
            spy={true}
            onClick={closeMobileMenu}
          >
            Today's Special
          </ScrollLink>

          <ScrollLink
            to="sweet-list"
            smooth={true}
            offset={-60}
            duration={500}
            className="nav-link"
            activeClass="active"
            spy={true}
            onClick={closeMobileMenu}
          >

            Sweet List
          </ScrollLink>

          <RouterLink to="/contact" className="nav-link" onClick={closeMobileMenu}>
            Contact
          </RouterLink>

          <RouterLink to="/cart" className="nav-link cart-icon" onClick={closeMobileMenu}>
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </RouterLink>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
