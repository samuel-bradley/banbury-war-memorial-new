import Link from 'next/link'
import Main from '@/components/main'

export default async function Memorial() {
  return (
    <Main pageName="memorial" heading="Memorial" content = {
      <p>Sorry, but the page you tried to access was not found. Please <Link href="/contact">contact us</Link> if you
      think this is an error.</p>
    }/>
  )
}
