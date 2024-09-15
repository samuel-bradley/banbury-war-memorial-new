import Link from 'next/link'

export default function Navigation({currentPage}: {currentPage: string}) {
  return (
    <nav className="flex flex-row gap-x-3">
      <Link href="/" className="hover:underline" aria-current={currentPage == 'memorial' ? 'page' : undefined}>Memorial</Link>
      <Link href="/about" className="hover:underline" aria-current={currentPage == 'about' ? 'page' : undefined}>About</Link>
      <Link href="/wartime-banbury" className="hover:underline" aria-current={currentPage == 'wartime-banbury' ? 'page' : undefined}>Wartime Banbury</Link>
      <Link href="/contact" className="hover:underline" aria-current={currentPage == 'contact' ? 'page' : undefined}>Contact</Link>
    </nav>
  )
}
