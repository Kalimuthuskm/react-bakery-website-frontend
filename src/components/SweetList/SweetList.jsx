import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext'; // Import cart context
import './SweetList.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import mysorepak from '../../assets/mysorepak.jpg';
import adhirasam from '../../assets/Adhirasam.jpg';
import milkcake from '../../assets/Milk Cake.jpg';
import karasev from '../../assets/KarSev.jpg';
import murukku from '../../assets/Murukku.jpg';
import thattai from '../../assets/Thattai.jpg';
import RavaKesari from '../../assets/RavaKesari.jpg';
import Kozhukattai from '../../assets/Kozhukattai.jpg';
import RibbonPakoda from '../../assets/RibbonPakoda.jpg';
import BadamHalwa from '../../assets/BadamHalwa.jpg';
import KajuKatli from '../../assets/Kaju Katli.jpg';
import palKozhukattai from '../../assets/Palkozhukattai.jpg';
import payasam from '../../assets/Payasam.jpg';
import Neiappam from '../../assets/NeiAppam.jpg';
import Basundi from '../../assets/Basundi.jpg'
import Omapodi from '../../assets/Omapodi.jpg';




const SweetList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToCart } = useCart(); // Get addToCart function from context
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Enhanced bakery products data with more Tamil Nadu items
  const products = [
    {
      id: 1,
      name: 'Mysore Pak',
      category: 'Traditional',
      price: 250,
      weight: '500g',
      image: mysorepak,
      description: 'Rich gram flour sweet with ghee'
    }, 
    {
      id: 2,
      name: 'Adhirasam',
      category: 'Traditional',
      price: 300,
      weight: '1kg',
      image: adhirasam,
      description: 'Traditional jaggery sweet from Tamil Nadu'
    },
    {
      id: 3,
      name: 'Milk Cake',
      category: 'Milk-Based',
      price: 200,
      weight: '500g',
      image: milkcake,
      description: 'Delicious milk-based fudge'
    },
    {
      id: 4,
      name: 'Kara Sev',
      category: 'Savories',
      price: 150,
      weight: '250g',
      image: karasev,
      description: 'Crispy spicy snack made from chickpea flour'
    },
    {
      id: 5,
      name: 'Murukku',
      category: 'Savories',
      price: 180,
      weight: '300g',
      image: murukku,
      description: 'Crispy rice flour spiral snack'
    },
    {
      id: 6,
      name: 'Kozhukattai',
      category: 'Traditional',
      price: 120,
      weight: '500g',
      image: Kozhukattai, // Replace with actual image
      description: 'Steamed rice flour dumplings with coconut filling'
    },
    {
      id: 7,
      name: 'Paal Kozhukattai',
      category: 'Milk-Based',
      price: 220,
      weight: '400g',
      image: palKozhukattai, // Replace with actual image
      description: 'Sweet rice dumplings cooked in milk'
    },
    {
      id: 8,
      name: 'Ribbon Pakoda',
      category: 'Savories',
      price: 160,
      weight: '300g',
      image: RibbonPakoda, // Replace with actual image
      description: 'Crispy ribbon-shaped snack with spices'
    },
    // Additional items (9-16) shown only when expanded
    {
      id: 9,
      name: 'Rava Kesari',
      category: 'Traditional',
      price: 180,
      weight: '500g',
      image: RavaKesari, // Replace with actual image
      description: 'Semolina sweet with ghee and nuts'
    },
    {
      id: 10,
      name: 'Payasam',
      category: 'Milk-Based',
      price: 250,
      weight: '1L',
      image: payasam, // Replace with actual image
      description: 'Traditional Tamil Nadu rice pudding'
    },
    {
      id: 11,
      name: 'Thattai',
      category: 'Savories',
      price: 140,
      weight: '250g',
      image: thattai, // Replace with actual image
      description: 'Crispy rice flour crackers with spices'
    },
    {
      id: 12,
      name: 'Nei Appam',
      category: 'Traditional',
      price: 200,
      weight: '400g',
      image: Neiappam, // Replace with actual image
      description: 'Ghee-fried sweet rice pancakes'
    },
    {
      id: 13,
      name: 'Basundi',
      category: 'Milk-Based',
      price: 280,
      weight: '500ml',
      image:Basundi , // Replace with actual image
      description: 'Thick sweetened milk dessert with nuts'
    },
    {
      id: 14,
      name: 'Omapodi',
      category: 'Savories',
      price: 170,
      weight: '300g',
      image: Omapodi, // Replace with actual image
      description: 'Fine vermicelli-like snack with ajwain'
    },
    {
      id: 15,
      name: 'Kaju Katli',
      category: 'Traditional',
      price: 450,
      weight: '250g',
      image: KajuKatli, // Replace with actual image
      description: 'Diamond-shaped cashew fudge'
    },
    {
      id: 16,
      name: 'Badam Halwa',
      category: 'Milk-Based',
      price: 350,
      weight: '300g',
      image: BadamHalwa, // Replace with actual image
      description: 'Rich almond-based sweet dessert'
    }
  ];

  const categories = ['All', 'Traditional', 'Milk-Based', 'Savories'];

  // Filter products based on selected category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Show only first 8 items initially, all when expanded
  const displayedProducts = isExpanded ? filteredProducts : filteredProducts.slice(0, 8);
  const hasMoreItems = filteredProducts.length > 8;

  // Handle add to cart with animation
  const handleAddToCart = (product) => {
    addToCart(product);
    // You can add animation feedback here if needed
  };

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
    // Scroll to top of products section when collapsing
    if (isExpanded) {
      document.getElementById('sweetlist')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="sweet-list" id="sweetlist">
      <h2 className="section-title" data-aos="zoom-in">Our Sweet Collection</h2>
      
      {/* Search and filter controls */}
      <div className="controls" data-aos="fade-up">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search sweets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search bakery items"
          />
        </div>
        
        <div className="category-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products grid */}
      <div className="products-grid">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product, index) => (
            <div className="product-card" key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy" 
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = process.env.PUBLIC_URL + '/assets/placeholder.jpg'; 
                  }} 
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <div className="price-weight">
                  <span className="price">₹{product.price}</span>
                  <span className="weight">{product.weight}</span>
                </div>
                <button 
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results" data-aos="fade-up">
            <p>No products match your search criteria.</p>
            <button 
              className="reset-filters"
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Expand/Collapse button */}
      {hasMoreItems && displayedProducts.length > 0 && (
        <div className="expand-section" data-aos="fade-up">
          <button 
            className="expand-btn"
            onClick={handleExpandToggle}
            aria-label={isExpanded ? 'Show less items' : 'Show more items'}
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="18,15 12,9 6,15"></polyline>
                </svg>
              </>
            ) : (
              <>
                <span>View All ({filteredProducts.length} items)</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default SweetList;