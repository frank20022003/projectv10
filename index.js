
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Portfolio</h1>
      <p>Your one-stop hub for my work, blogs, and projects.</p>
      <nav>
        <ul>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/resume"><a>Resume</a></Link></li>
          <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
