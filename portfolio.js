
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="container">
      <h1>My Portfolio</h1>
      <p>Explore some of my best work:</p>
      <ul>
        <li><strong>Weather App:</strong> Real-time weather details powered by APIs.</li>
        <li><strong>Crypto Tracker:</strong> Stay updated on the latest cryptocurrency stats.</li>
        <li><strong>Recipe Finder:</strong> Discover recipes with your ingredients.</li>
      </ul>
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/resume"><a>Resume</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
