export default function Memorial() {
  return (
    <main className="min-h-screen flex flex-col gap-y-5 items-center p-24 font-sans">
      <nav role="nav" className="flex flex-row gap-x-3">
        <a href="/" className="hover:underline">Memorial</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/wartime-banbury" className="hover:underline">Wartime Banbury</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
      <h1 className="text-4xl">Memorial</h1>
      <p className="italic">
        They shall not grow old as we who are left grow old<br/>
        Age shall not weary them, nor the years condemn<br/>
        At the going down of the sun and in the morning<br/>
        We will remember them.
      </p>
    </main>
  );
}
