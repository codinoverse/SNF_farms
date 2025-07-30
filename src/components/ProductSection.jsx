import React, { useState, useEffect } from 'react';
import './ProductsSection.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      category: 'seeds',
      name: 'Organic Corn Seeds',
      description: 'High-yield, drought-resistant corn seeds perfect for sustainable farming.',
      price: 49.99,
      originalPrice: 59.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/624b6be9a9-7bc3814dc0410b9d50b2.png',
      badge: 'BESTSELLER',
      badgeClass: 'badge-bestseller',
      gradientClass: 'gradient-green',
      iconClass: 'fas fa-seedling',
      iconColor: 'text-green',
      categoryLabel: 'Premium Seeds'
    },
    {
      id: 2,
      category: 'fertilizers',
      name: 'Bio-Nutrient Boost',
      description: 'Advanced organic fertilizer for enhanced plant growth and soil health.',
      price: 34.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/9822aa410e-e265c805d2ffd53af799.png',
      gradientClass: 'gradient-blue',
      iconClass: 'fas fa-flask',
      iconColor: 'text-blue',
      categoryLabel: 'Organic Fertilizer'
    },
    {
      id: 3,
      category: 'tools',
      name: 'Pro Garden Tool Set',
      description: 'Professional-grade tools for efficient farming and gardening operations.',
      price: 89.99,
      originalPrice: 109.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/70bd3c25f6-9d0193c032ebb7dcf8b9.png',
      badge: 'LIMITED',
      badgeClass: 'badge-limited',
      gradientClass: 'gradient-orange',
      iconClass: 'fas fa-tools',
      iconColor: 'text-orange',
      categoryLabel: 'Garden Tools'
    },
    {
      id: 4,
      category: 'irrigation',
      name: 'Smart Drip System',
      description: 'Automated irrigation system with water-saving technology.',
      price: 199.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/446faaf8a0-59ef58c2fdd742537f4c.png',
      gradientClass: 'gradient-cyan',
      iconClass: 'fas fa-tint',
      iconColor: 'text-cyan',
      categoryLabel: 'Smart Irrigation'
    },
    {
      id: 5,
      category: 'seeds',
      name: 'Heirloom Tomato Seeds',
      description: 'Premium heirloom varieties for exceptional flavor and nutrition.',
      price: 24.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b5cfb50c32-f414a4e82c2e9ded1371.png',
      badge: 'ECO-FRIENDLY',
      badgeClass: 'badge-eco',
      gradientClass: 'gradient-purple',
      iconClass: 'fas fa-seedling',
      iconColor: 'text-purple',
      categoryLabel: 'Vegetable Seeds'
    },
    {
      id: 6,
      category: 'fertilizers',
      name: 'Premium Compost Mix',
      description: 'Rich organic compost for soil enhancement and plant nutrition.',
      price: 19.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/316e4afecd-2ec8c42a138e973667d0.png',
      gradientClass: 'gradient-emerald',
      iconClass: 'fas fa-leaf',
      iconColor: 'text-emerald',
      categoryLabel: 'Organic Compost'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products', icon: '' },
    { id: 'seeds', label: 'Seeds', icon: 'fas fa-seedling' },
    { id: 'fertilizers', label: 'Fertilizers', icon: 'fas fa-flask' },
    { id: 'tools', label: 'Tools', icon: 'fas fa-tools' },
    { id: 'irrigation', label: 'Irrigation', icon: 'fas fa-tint' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Navbar />
      <section className="products-section">
        <div className="container">
          <div className="products-header text-center mb-5 fade-in-up">
            <span className="badge-tag">Our Products</span>
            <h2 className="section-title">
              Sathosh
              <span className="text-green"> Farm's</span>
            </h2>
            <p className="section-description">
              Discover our comprehensive range of high-quality agricultural products designed to maximize your harvest and promote sustainable farming practices.
              At Santhosh Farms, we offer a diverse range of grass varieties to suit every need and environment. Here are four or our most popular types:

            </p>

          </div>

          <div className="category-filters d-flex flex-wrap justify-content-center gap-3 mb-5 fade-in-up stagger-1">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryFilter(category.id)}
              >
                {category.icon && <i className={`${category.icon} me-2`}></i>}
                {category.label}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className={`product-card hover-lift fade-in-up stagger-${(index % 6) + 1}`}>
                  <div className={`product-image ${product.gradientClass}`}>
                    <img src={product.image} alt={product.name} />
                    {product.badge && (
                      <div className="product-badge">
                        <span className={`badge ${product.badgeClass}`}>{product.badge}</span>
                      </div>
                    )}
                    <div className="product-favorite">
                      <button className="btn-favorite">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-category">
                      <i className={`${product.iconClass} ${product.iconColor}`}></i>
                      <span>{product.categoryLabel}</span>
                    </div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer d-flex justify-content-between align-items-center">
                      <div className="product-price">
                        <span className="current-price">${product.price}</span>
                        {product.originalPrice && (
                          <span className="original-price">${product.originalPrice}</span>
                        )}
                      </div>
                      <button className="btn btn-add-cart">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 fade-in-up">
            <button className="btn btn-view-all">
              View All Products
              <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ProductsSection;
