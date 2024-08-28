import Image from 'next/image'
import Link from 'next/link'
import Main from '../../main'

export default function DummyAlly() {
  return (
    <Main pageName="dummy-ally" heading="Wartime Banbury" content = {
      <>
        <h2>The Dummy Ally and Alcan Roll of Honour</h2>
        <p>The Northern Aluminium Company sheet rolling factory was built to the north of Banbury in 1931, and expanded
          again in the mid 30s to meet increased demand from the aircraft industry. During the years of the Second World
          War, Banbury supplied around 60% of its needs, working in conjunction with an aluminium recycling plant near
          Adderbury which processed metal from crashed English and German planes. The Banbury factory employed around
          4,000 people at its peak, many of them women.</p>
	      <p>A large number of the men who worked at the factory were called up during the War; some never returned. The
          Roll of Honour below was published by the factory in October 1945 and lists those men who had been killed
          while serving their country, together with their job at the factory. Those with blue dots are listed on the
          Banbury World War II Memorial.</p>
        <Image src="/alcan-roll-of-honour.jpg" width={500} height={417} className="mx-auto my-4 border"
          alt="Alcan Roll of Honour, listing names grouped under their respective jobs"/>
        <p><a href="/alcan-roll-of-honour.pdf">Click here for an article published in a company magazine about the Alcan
          Roll of Honour</a> (kindly supplied with the image above by J. Tobin).</p>
        <p>Since the factory on the Southam Road (later called Alcan) was an obvious target for enemy bombers during
          the war, a dummy factory was built two miles to the north by Shepperton Studios, known as the "Dummy Ally".
          The real factory, located next to the Banbury Canal and used to manufacture parts for aircraft, was
          camouflaged, and the decoy was built to the east of the A423 between Great Bourton and Mollington, where the
          buildings of Manorfields Farm stand. The dummy factory was built to look as much like the real factory as
          possible, with pillars and finials at the entrance and a length of railway track alongside. Men were hired to
          keep fires burning on the site, producing smoke just like the real Alcan. In fact, they were using the
          building to keep pigs and chickens.</p>
        <p>The decoy worked well as the real aluminium factory was never bombed, while the decoy was, notably on 3rd
          October 1940. The dummy gateposts still existed in the 1970s, while the real factory finally closed in 2009.
        </p>
        <Image src="/alcan.jpg" width={226} height={170} className="mx-auto my-4 border" alt="Photo of Alcan building"/>
	      <p><em>Sources: Brian P. Cannon 2009 / Roger Hartree, Warwickshire Industrial Archaeology Society Newsletter:
          Number 37</em></p>
        <p className="mt-6 text-center"><Link href="/wartime-banbury">Back to Wartime Banbury</Link></p>
      </>
    }/>
  )
}
