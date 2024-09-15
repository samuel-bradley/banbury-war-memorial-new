import Navigation from '@/navigation'

export default function Main(
    {pageName, heading, content}: Readonly<{pageName: string, heading: string, content: React.ReactNode}>
  ) {
  return (
    <main className="min-h-screen flex flex-col gap-y-5 items-center p-24 font-sans">
      <title>{`Banbury War Memorial - ${heading}`}</title>
      <Navigation currentPage={pageName}/>
        <h1 className="text-4xl">{heading}</h1>
        <div className="max-w-3xl">{content}</div>
    </main>
  )
}
