import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice.jsx';

const money = (value) => `$${value.toFixed(2)}`;
const imageUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&q=80`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="page-container cart-page">
        <p className="eyebrow">YOUR LITTLE GREEN CORNER</p>
        <h1>Your cart is <em>taking a breather.</em></h1>
        <section className="empty-cart">
          <div className="empty-cart-icon">🪴</div>
          <h2>No plants in your cart yet</h2>
          <p>Your next favorite leafy friend is waiting to be found.</p>
          <Link className="primary-button" to="/plants">Continue Shopping <span aria-hidden="true">→</span></Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-container cart-page">
      <p className="eyebrow">YOUR LITTLE GREEN CORNER</p>
      <div className="cart-heading-row">
        <div><h1>Your cart, <em>your jungle.</em></h1><p className="intro-text">{totalItems} {totalItems === 1 ? 'plant' : 'plants'} selected for your space.</p></div>
        <Link className="text-link" to="/plants">← Continue shopping</Link>
      </div>
      <div className="cart-layout">
        <section className="cart-items-list" aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-line-item" key={item.id}>
              <img className="cart-thumb" src={imageUrl(item.image)} alt={item.name} />
              <div className="cart-item-info">
                <p className="plant-category plain">{item.category}</p>
                <h2>{item.name}</h2>
                <p className="cart-unit-price">{money(item.price)} <span>each</span></p>
                <button className="remove-link" onClick={() => dispatch(removeItem(item.id))}>Remove item</button>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <strong className="line-total">{money(item.price * item.quantity)}</strong>
              </div>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <p className="eyebrow">ORDER SUMMARY</p>
          <div className="summary-row"><span>Items ({totalItems})</span><span>{money(total)}</span></div>
          <div className="summary-row"><span>Delivery</span><span className="free-delivery">Free</span></div>
          <div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>
          <p className="summary-note">Taxes, if applicable, are calculated at checkout.</p>
          <button className="primary-button checkout-button" onClick={() => window.alert('Coming Soon! Checkout will be available soon.')}>Checkout <span aria-hidden="true">→</span></button>
          <Link className="summary-continue" to="/plants">Continue shopping</Link>
        </aside>
      </div>
    </main>
  );
}
