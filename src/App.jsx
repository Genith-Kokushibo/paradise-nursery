import { useSelector } from 'react-redux';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Navbar() {
  const count = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-mark">❧</span>
        <span>Paradise <strong>Nursery</strong></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-nav" to="/cart" aria-label={`Cart, ${count} items`}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-overlay" />
      <section className="landing-copy">
        <p className="eyebrow">GROW SOMETHING GOOD</p>
        <h1>Make room for<br /><em>more green.</em></h1>
        <p className="landing-description">
          Thoughtfully chosen houseplants to bring calm, color, and a breath of fresh air into your home.
        </p>
        <Link className="primary-button" to="/plants">Get Started <span aria-hidden="true">→</span></Link>
        <div className="landing-note"><span>✦</span> Plants for every corner, every beginner, every day.</div>
      </section>
      <div className="landing-badge"><span>✿</span><span>Rooted in<br />good living</span></div>
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  return (
    <div className="app-shell">
      {!isLanding && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      {!isLanding && <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery <span>·</span> Grow at your own pace.</footer>}
    </div>
  );
}
