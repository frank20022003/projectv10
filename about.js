
import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <p>Hi, I'm a passionate web developer creating interactive and dynamic web experiences.</p>
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/resume"><a>Resume</a></Link></li>
          <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
