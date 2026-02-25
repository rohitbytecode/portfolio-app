import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="top-nav">
      <nav>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}