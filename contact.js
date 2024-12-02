
import Link from 'next/link';

export default function Contact() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Contact Me</h1>
      <p>Email: contact@portfolio.com</p>
      <p>LinkedIn: <a href="https://linkedin.com">Visit Profile</a></p>
      <p>iLac: <a href="https://ilac.com">Visit iLac</a></p>
      <nav>
        <Link href="/"><button>Home</button></Link>
        <Link href="/about"><button>About</button></Link>
        <Link href="/resume"><button>Resume</button></Link>
        <Link href="/portfolio"><button>Portfolio</button></Link>
        <Link href="/blog"><button>Blog</button></Link>
      </nav>
    </div>
  );
}
