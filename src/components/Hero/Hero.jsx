import './Hero.css';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay enhanced-overlay">
        <h2 className="fade-in">Welcome to</h2>
        <div className="typing-text scale-in">
          <Typewriter
            options={{
              strings: ['SKM Bakery!', 'Fresh. Sweet. Authentic.'],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
              pauseFor: 1500,
            }}
          />
        </div>
        <p className="slide-up">Traditional Sweets &amp; Bakes straight from Tamil Nadu ❤️</p>
      </div>
      <div className="scroll-down bounce">
        <span>↓</span>
      </div>
    </section>
  );
};

export default Hero;
