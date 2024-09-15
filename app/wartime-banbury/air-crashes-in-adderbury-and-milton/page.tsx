import Link from 'next/link'
import Main from '@/components/main'

export default function AirCrashesInAdderburyAndMilton() {
  return (
    <Main pageName="air-crashes-in-adderbury-and-milton" heading="Wartime Banbury" content = {
      <>
        <h2>Air Crashes in Adderbury and Milton</h2>
        <h3>Mill Lane, 1944</h3>
        <p>On the 9th of December 1944 at 18.20, Wellington bomber BJ782 of 21 OTU took off from Moreton-in-Marsh on a
          cross-country night training mission. Sometime around 20.30 that evening, the starboard engine caught fire at
          5,000 feet and the crew were directed to land at Barford St. John. However, once they reached the airfield
          they were for some reason unable to do so, overshot the runway, then suddenly dived and crashed into the
          railway embankment behind the cottages in Mill Lane, Adderbury.</p>
        <p>The rear gunner, Sgt W. H. Donaldson, was thown clear and survived the crash. He was joined by vicar Reverend
          Thomas South, who had been dining at the Manor House in Mill Lane, and local man Joseph Bennett, who lived
          nearby. Both had heard the crash and came to assist. The aircraft was on fire with ammunition exploding, but
          Bennett, the vicar and Sgt Donaldson managed to pull the remaining five aircrew from the burning wreckage. Two
          were already dead and the others sadly died in hospital in Oxford the following day. For their bravery,
          Reverend South and Joseph Bennett received the King's Commendation.</p>
        <p>Having attempted a landing at Barford St. John, the Wellington would have struggled to regain altitude after
          overshooting the runway, especially with only one engine functioning. It is thought locally that the pilot may
          have crashed into the embankment while trying to avoid the spire of St. Mary's Church Adderbury, a few yards
          away from the crash site, and the cottages in Mill Lane itself.</p>
        <p>The crew consisted of:</p>
        <ul className="list-disc list-outside ml-8">
            <li>RAAF 429152 Flt Sgt John Alexander Hay, Captain (Pilot) - born 26 Feb 1922, Bendigo, Victoria; enlisted
              in Sydney, Australia; next of kin Vera Hay (mother)</li>
            <li>RAF Sgt Arthur Barker, (Navigator) aged 21; son of George and Elsie Barker, of Huddersfield.</li>
            <li>RAF Sgt James Hogg Bell, (Air Bomber) aged 20; born Portrush, County Antrim, 21 March 1924. One of five
              children of John Bell and Hester Bell (nee Haughey), who lived at 'Springhill' in Causeway Street. At the
              age of 17 he became a member of the Home Guard and joined the RAF directly from school on July 19, 1941
              and was sent home on the reserve list until he was called up on July 6, 1942.</li>
            <li>RAF Sgt Reginald George Clements, (Wireless Air Gunner) aged 20; son of Dora Mary Jacobs, of Westley
              Waterless.</li>
            <li>RAF Sgt William Robinson, (Air Gunner) aged 19; son of John and Dorothy Ann Robinson, of Sherburn.</li>
            <li>RAF Sgt W. H. Donaldson, (Air Gunner) 1597119? R.A.F.V.R., survived the crash and was treated for shock.</li>
        </ul>
        <p>Flt Sgt Hay and Sgt Barker are buried in Oxford (Botley) Cemetery. Sgt Bell is buried in Portrush Cemetery,
          County Antrim. Sgt Clements is buried in Westley Waterless (St. Mary the Less) Churchyard, Cambridgeshire. Sgt
          Robinson is buried in Shelburn (St. Mary) Churchyard, Durham.</p>
        <h3>Milton, 1945</h3>
        <p>The following year another terrible crash following an overshoot at Barford St. John claimed the lives of
          both the crew and a civilian. On 13th November 1945, Mosquito RR294 of 16 OTU hit a farmhouse on overshoot
          from Barford St. John, killing the pilot instructor, his pupil, and seven week old baby Richard George
          Quartermain who was in the house at Glebe Farm, Milton, near Adderbury. The crew were:</p>
        <ul className="list-disc list-outside ml-8">
          <li>Rowe, Donald James, Flight Lieutenant, Royal Air Force Pilot Instr, 49203; age 23;; buried Hildenborough
            St. John Churchyard, Kent. Son of Arthur James Rowe and Margaret Ruth Rowe; husband of Pauline Rhoda Rowe,
            of Hildenborough.</li>
          <li>Gilder, Jack Edward, Flight Lieutenant, Pilot, Royal Air Force Volunteer Reserve, 122494; age 27; buried
            Wandsworth Cemetery. Son of Edward Thomas Gilder and Violet Florence Gilder; husband of Frances Mary Gilder,
            of Surbiton, Surrey.</li>
        </ul>
        <h3>Sources</h3>
        <ul className="list-disc list-outside ml-8">
          <li><i>Adderbury, A Thousand Years of History</i>, Nicholas Allen</li>
          <li><i>Wartime Memories of a Parish</i>, Rhoda Woodward</li>
          <li>Midlands Air Recovery Group (MARG)</li>
        </ul>
        <p className="mt-6 text-center"><Link href="/wartime-banbury">Back to Wartime Banbury</Link></p>
      </>
    }/>
  )
}
