
import Link from 'next/link';

export default function Blog() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Blog</h1>
      <p>Latest Articles:</p>
      <ul>
        <li><a href="https://medium.com">Understanding APIs</a></li>
        <li><a href="https://medium.com">Top Frontend Frameworks</a></li>
      </ul>
      <nav>
        <Link href="/"><button>Home</button></Link>
        <Link href="/about"><button>About</button></Link>
        <Link href="/resume"><button>Resume</button></Link>
        <Link href="/portfolio"><button>Portfolio</button></Link>
        <Link href="/contact"><button>Contact</button></Link>
      </nav>
    </div>
  );
}
