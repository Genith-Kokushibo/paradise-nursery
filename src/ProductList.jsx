import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import { Link } from 'react-router-dom';

const products = [
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Statement Plants', price: 28, light: 'Bright, indirect light', image: 'photo-1614594975525-e45190c55d0b', description: 'Bold split leaves, big jungle energy.' },
  { id: 'fiddle', name: 'Fiddle Leaf Fig', category: 'Statement Plants', price: 36, light: 'Bright filtered light', image: 'photo-1501004318641-b39e6451bec6', description: 'A sculptural favorite for bright rooms.' },
  { id: 'rubber', name: 'Rubber Plant', category: 'Statement Plants', price: 25, light: 'Medium to bright light', image: 'photo-1597055181300-a8f3a6e9b3e0', description: 'Glossy leaves with a modern silhouette.' },
  { id: 'bird', name: 'Bird of Paradise', category: 'Statement Plants', price: 42, light: 'Bright light', image: 'photo-1509423350716-97f9360b4e09', description: 'Tropical character for open spaces.' },
  { id: 'areca', name: 'Areca Palm', category: 'Statement Plants', price: 31, light: 'Bright, indirect light', image: 'photo-1512428813834-c702c7702b78', description: 'Feathery fronds and a relaxed feel.' },
  { id: 'calathea', name: 'Calathea Orbifolia', category: 'Statement Plants', price: 29, light: 'Medium indirect light', image: 'photo-1485955900006-10f4d324d411', description: 'Round patterned leaves with soft drama.' },
  { id: 'snake', name: 'Snake Plant', category: 'Easy Care', price: 18, light: 'Low to bright light', image: 'photo-1593691509543-c55fb32e5cee', description: 'Architectural, forgiving, and beginner-friendly.' },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy Care', price: 21, light: 'Low to medium light', image: 'photo-1593482892290-f54927ae2b3b', description: 'Shiny leaves that thrive on neglect.' },
  { id: 'pothos', name: 'Golden Pothos', category: 'Easy Care', price: 15, light: 'Low to bright indirect light', image: 'photo-1497250681960-ef046c08a56e', description: 'A cheerful trailing plant for shelves.' },
  { id: 'spider', name: 'Spider Plant', category: 'Easy Care', price: 16, light: 'Bright indirect light', image: 'photo-1572688484438-313a6e50c333', description: 'Playful arching leaves and easy care.' },
  { id: 'peace', name: 'Peace Lily', category: 'Easy Care', price: 22, light: 'Low to medium light', image: 'photo-1593691509543-c55fb32e5cee', description: 'Elegant foliage with occasional white blooms.' },
  { id: 'jade', name: 'Jade Plant', category: 'Easy Care', price: 14, light: 'Bright light', image: 'photo-1509423350716-97f9360b4e09', description: 'A compact succulent with plump leaves.' },
  { id: 'string', name: 'String of Hearts', category: 'Trailing Plants', price: 19, light: 'Bright indirect light', image: 'photo-1497250681960-ef046c08a56e', description: 'Delicate heart-shaped leaves on cascading vines.' },
  { id: 'philodendron', name: 'Heartleaf Philodendron', category: 'Trailing Plants', price: 17, light: 'Medium indirect light', image: 'photo-1485955900006-10f4d324d411', description: 'A lush, low-fuss trailing companion.' },
  { id: 'dischidia', name: 'Dischidia', category: 'Trailing Plants', price: 23, light: 'Bright indirect light', image: 'photo-1614594975525-e45190c55d0b', description: 'A textured trailing plant for hanging pots.' },
  { id: 'english', name: 'English Ivy', category: 'Trailing Plants', price: 16, light: 'Medium to bright light', image: 'photo-1501004318641-b39e6451bec6', description: 'Classic cascading greenery.' },
  { id: 'lipstick', name: 'Lipstick Plant', category: 'Trailing Plants', price: 24, light: 'Bright indirect light', image: 'photo-1512428813834-c702c7702b78', description: 'Glossy trailing leaves with vivid seasonal flowers.' },
  { id: 'burro', name: 'Burro’s Tail', category: 'Trailing Plants', price: 20, light: 'Bright indirect light', image: 'photo-1597055181300-a8f3a6e9b3e0', description: 'A sculptural succulent that spills over its pot.' },
];

const categories = ['All Plants', 'Statement Plants', 'Easy Care', 'Trailing Plants'];
const imageUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

function PlantCard({ plant, added, onAdd }) {
  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img className="plant-image" src={imageUrl(plant.image)} alt={plant.name} loading="lazy" />
        <span className="plant-category">{plant.category}</span>
      </div>
      <div className="plant-card-content">
        <div className="plant-title-row">
          <h3>{plant.name}</h3>
          <span className="plant-price">${plant.price.toFixed(2)}</span>
        </div>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-light"><span aria-hidden="true">☼</span> {plant.light}</p>
        <button className={`add-button ${added ? 'is-added' : ''}`} onClick={() => onAdd(plant)} disabled={added}>
          {added ? '✓ Added to Cart' : '+ Add to Cart'}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [activeCategory, setActiveCategory] = useState('All Plants');
  const addedIds = useMemo(() => new Set(cartItems.map((item) => item.id)), [cartItems]);
  const visibleProducts = activeCategory === 'All Plants'
    ? products
    : products.filter((plant) => plant.category === activeCategory);

  return (
    <main className="page-container plants-page">
      <section className="page-intro">
        <div>
          <p className="eyebrow">THE PLANT SHOP</p>
          <h1>Find your <em>green thing.</em></h1>
          <p className="intro-text">A little leafy joy for every room, routine, and level of plant-parent experience.</p>
        </div>
        <Link className="outline-button" to="/cart">View cart <span aria-hidden="true">→</span></Link>
      </section>
      <div className="category-tabs" role="group" aria-label="Filter plants by category">
        {categories.map((category) => (
          <button key={category} className={activeCategory === category ? 'category-tab active' : 'category-tab'} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="results-line"><span>{visibleProducts.length} plants to love</span><span>Thoughtfully picked · Ready to grow</span></div>
      <section className="plant-grid" aria-label="Houseplants">
        {visibleProducts.map((plant) => (
          <PlantCard key={plant.id} plant={plant} added={addedIds.has(plant.id)} onAdd={(item) => dispatch(addItem(item))} />
        ))}
      </section>
    </main>
  );
}