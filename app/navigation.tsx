export default function Navigation() {
  return (
    <nav role="nav" className="flex flex-row gap-x-3">
      <a href="/" className="hover:underline">Memorial</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/wartime-banbury" className="hover:underline">Wartime Banbury</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </nav>
  );
}
