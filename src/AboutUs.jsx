import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <main className="about-page page-container">
      <p className="eyebrow">OUR ROOTS</p>
      <h1>Good things grow <em>together.</em></h1>
      <div className="about-layout">
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85"
          alt="A sunlit collection of green houseplants"
        />
        <div className="about-copy">
          <h2>A little more life in every room.</h2>
          <p>Paradise Nursery is a plant-loving shop built around a simple idea: caring for plants should feel joyful, not intimidating. We curate beautiful, approachable houseplants for apartments, home offices, and every sunny windowsill in between.</p>
          <p>From resilient starter plants to statement-making leafy friends, our goal is to help you find the right plant for your space and confidence level. We believe a greener home can make everyday life feel calmer, brighter, and more connected to nature.</p>
          <p className="about-promise">Choose a plant. Find your rhythm. Let it grow.</p>
          <Link className="text-link" to="/plants">Explore the collection →</Link>
        </div>
      </div>
    </main>
  );
}
