export default function Navigation({currentPage}: {currentPage: string}) {
  return (
    <nav role="nav" className="flex flex-row gap-x-3">
      <a href="/" className="hover:underline" aria-current={currentPage == "memorial" ? "page" : undefined}>Memorial</a>
      <a href="/about" className="hover:underline" aria-current={currentPage == "about" ? "page" : undefined}>About</a>
      <a href="/wartime-banbury" className="hover:underline" aria-current={currentPage == "wartime-banbury" ? "page" : undefined}>Wartime Banbury</a>
      <a href="/contact" className="hover:underline" aria-current={currentPage == "contact" ? "page" : undefined}>Contact</a>
    </nav>
  );
}
