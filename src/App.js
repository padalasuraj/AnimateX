import React, { useState } from "react";
import "./App.css";

const templates = [
  {
    id: 1,
    name: "Neon SaaS Launch",
    category: "Startup",
    price: 49,
    rating: 4.9,
    sales: "2.4k",
    accent: "cyan",
    description: "High-converting startup landing page with legal and product sections.",
    features: ["3 hero variants", "Pricing blocks", "Dark neon UI"]
  },
  {
    id: 2,
    name: "Creative Studio",
    category: "Agency",
    price: 69,
    rating: 4.8,
    sales: "1.8k",
    accent: "purple",
    description: "Pitch-perfect portfolio and service website for creative agencies.",
    features: ["Case studies", "Animated sections", "Lead capture"]
  },
  {
    id: 3,
    name: "App Product Hero",
    category: "Product",
    price: 59,
    rating: 4.9,
    sales: "3.1k",
    accent: "pink",
    description: "Premium product showcase designed to turn visitors into users.",
    features: ["Feature matrix", "Testimonials", "App mockups"]
  },
  {
    id: 4,
    name: "Ecommerce Boost",
    category: "Store",
    price: 79,
    rating: 5.0,
    sales: "4.6k",
    accent: "green",
    description: "Shopfront experience built for modern product launches and bundles.",
    features: ["Product grid", "Checkout flow", "Promo banners"]
  }
];

const metrics = [
  { value: "10k+", label: "Designs shipped" },
  { value: "4.9/5", label: "Avg. rating" },
  { value: "92%", label: "Repeat buyers" },
  { value: "24/7", label: "Template support" }
];

const showcaseItems = [
  { title: "Landing Pages", description: "Hero-first layouts for SaaS, fintech, and AI brands." },
  { title: "Portfolio Sites", description: "Clean storytelling UI for designers, creators, and founders." },
  { title: "Commerce UX", description: "High-intent storefront kits for premium digital products." },
  { title: "Startup Dashboards", description: "Conversion-focused internal tools and analytics views." }
];

const plans = [
  { name: "Starter", price: 19, description: "For solo builders and early-stage MVPs.", features: ["2 templates", "Basic support", "Commercial license"] },
  { name: "Pro", price: 49, description: "For agencies and side hustles shipping fast.", features: ["Unlimited access", "Priority support", "All templates"], featured: true },
  { name: "Studio", price: 99, description: "For teams building multiple client experiences.", features: ["Team seats", "Custom blocks", "Design QA"] }
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [cart, setCart] = useState([templates[0]]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [billingEmail, setBillingEmail] = useState("hello@studio.com");
  const [cardName, setCardName] = useState("Alex Morgan");
  const [cardNumber, setCardNumber] = useState("4242 4242 4242 4242");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (template) => {
    setSelectedTemplate(template);
    setCart((current) => {
      const exists = current.some((item) => item.id === template.id);
      return exists ? current : [...current, template];
    });
    setIsCheckoutOpen(true);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setIsCheckoutOpen(false);
    }, 1600);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <span>AnimateX</span>
        </div>

        <nav className="topnav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#templates">Templates</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <button className="nav-cta" onClick={() => setIsCheckoutOpen(true)}>
          Buy now
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Premium UI design marketplace</span>
            <h1>
              Build faster with <span>premium UI kits</span> for every landing page.
            </h1>
            <p>
              Discover neon-ready templates for SaaS, portfolio, ecommerce, and product websites. Launch polished experiences in hours, not weeks.
            </p>

            <div className="cta-row">
              <button className="primary-btn" onClick={() => addToCart(templates[1])}>Explore templates</button>
              <button className="secondary-btn" onClick={() => setIsCheckoutOpen(true)}>Checkout</button>
            </div>

            <div className="trusted-row">
              {metrics.map((metric) => (
                <div key={metric.label} className="mini-stat">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="preview-card large-card">
              <div className="preview-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              <div className="browser-body">
                <div className="browser-sidebar">
                  <span className="sidebar-pill active" />
                  <span className="sidebar-pill" />
                  <span className="sidebar-pill" />
                </div>

                <div className="browser-content">
                  <div className="hero-panel">
                    <div className="hero-panel-copy">
                      <span>{selectedTemplate.category}</span>
                      <h3>{selectedTemplate.name}</h3>
                    </div>
                    <div className="price-badge">${selectedTemplate.price}</div>
                  </div>

                  <div className="line line-lg" />
                  <div className="line" />
                  <div className="grid-tiles">
                    <div className="tile" />
                    <div className="tile" />
                    <div className="tile" />
                    <div className="tile" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog" id="templates">
          <div className="section-heading">
            <span className="eyebrow">Best selling templates</span>
            <h2>Ready-made UI blocks for any modern brand</h2>
          </div>

          <div className="template-grid">
            {templates.map((template) => (
              <article key={template.id} className={`template-card ${template.accent}`}>
                <div className="card-topbar">
                  <span>{template.category}</span>
                  <span className="rating">★ {template.rating}</span>
                </div>

                <h3>{template.name}</h3>
                <p>{template.description}</p>

                <ul>
                  {template.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="card-footer">
                  <div>
                    <strong>${template.price}</strong>
                    <small>{template.sales} sales</small>
                  </div>

                  <button onClick={() => addToCart(template)}>Buy template</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading left-align">
            <span className="eyebrow">Why teams choose us</span>
            <h2>Professional design systems that convert.</h2>
          </div>

          <div className="feature-grid">
            {showcaseItems.map((item) => (
              <div key={item.title} className="feature-box">
                <div className="feature-icon">✦</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="section-heading">
            <span className="eyebrow">Simple pricing</span>
            <h2>Choose the license that matches your growth.</h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`price-card ${plan.featured ? "featured" : ""}`}>
                <span className="plan-name">{plan.name}</span>
                <h3>${plan.price}<small>/mo</small></h3>
                <p>{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <button>{plan.featured ? "Most popular" : "Get started"}</button>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-band">
          <div>
            <span className="eyebrow">Launch bold</span>
            <h2>Turn your next idea into a premium digital experience.</h2>
          </div>
          <button className="primary-btn" onClick={() => setIsCheckoutOpen(true)}>Start checkout</button>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <div className="brand-wrap">
            <div className="brand-mark">A</div>
            <span>AnimateX</span>
          </div>
        </div>
        <p>© 2026 AnimateX UI Marketplace</p>
      </footer>

      {isCheckoutOpen && (
        <div className="checkout-backdrop" onClick={() => setIsCheckoutOpen(false)}>
          <div className="checkout-modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow">Secure checkout</span>
                <h3>Complete your purchase</h3>
              </div>
              <button className="close-btn" onClick={() => setIsCheckoutOpen(false)} aria-label="Close checkout">×</button>
            </div>

            <div className="checkout-layout">
              <div className="order-summary">
                <h4>Order summary</h4>

                {cart.map((item) => (
                  <div key={item.id} className="order-item">
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.category}</small>
                    </div>
                    <span>${item.price}</span>
                  </div>
                ))}

                <div className="total-row">
                  <span>Total</span>
                  <strong>${total}</strong>
                </div>
              </div>

              <form className="payment-form" onSubmit={handlePayment}>
                <label>
                  Billing email
                  <input value={billingEmail} onChange={(event) => setBillingEmail(event.target.value)} type="email" placeholder="you@example.com" />
                </label>

                <label>
                  Cardholder name
                  <input value={cardName} onChange={(event) => setCardName(event.target.value)} type="text" placeholder="John Doe" />
                </label>

                <label>
                  Card number
                  <input value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} type="text" placeholder="4242 4242 4242 4242" />
                </label>

                <div className="card-details">
                  <label>
                    Expiry
                    <input type="text" placeholder="08/30" />
                  </label>
                  <label>
                    CVC
                    <input type="text" placeholder="123" />
                  </label>
                </div>

                <button type="submit" className="pay-btn">
                  {paymentSuccess ? "Payment successful" : `Pay $${total}`}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
