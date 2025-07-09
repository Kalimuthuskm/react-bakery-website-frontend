import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TodaySpecial.css';

// Import local images
import mysorepak from '../../assets/mysorepak.jpg';
import adhirasam from '../../assets/Adhirasam.jpg';
import milkcake from '../../assets/Milk Cake.jpg';
import karasev from '../../assets/KarSev.jpg';
import murukku from '../../assets/Murukku.jpg';

const specials = [
  {
    name: 'Mysore Pak',
    img: mysorepak,
    desc: 'Rich gram flour sweet with ghee',
    category: 'Traditional',
  },
  {
    name: 'Adhirasam',
    img: adhirasam,
    desc: 'Traditional jaggery sweet from Tamil Nadu',
    category: 'Traditional',
  },
  {
    name: 'Milk Cake',
    img: milkcake,
    desc: 'Delicious milk-based fudge',
    category: 'Milk-Based',
  },
  {
    name: 'Kara Sev',
    img: karasev,
    desc: 'Crispy spicy snack made from chickpea flour',
    category: 'Spicy Snacks',
  },
  {
    name: 'Murukku',
    img: murukku,
    desc: 'Crispy rice flour spiral snack',
    category: 'Spicy Snacks',
  },
];

const categories = ['All', 'Traditional', 'Milk-Based', 'Spicy Snacks'];

const TodaySpecial = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredSpecials =
    selectedCategory === 'All'
      ? specials
      : specials.filter(item => item.category === selectedCategory);

  return (
    <section className="specials" id="special">
      <h2 className="section-title" data-aos="zoom-in">Today’s Special 🍮</h2>

      <div className="category-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="specials-grid">
        {filteredSpecials.map((item, index) => (
          <div className="card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodaySpecial;
