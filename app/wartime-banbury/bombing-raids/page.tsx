import Link from 'next/link'
import Main from '@/main'

export default function BombingRaids() {
  return (
    <Main pageName="bombing-raids" heading="Wartime Banbury" content = {
      <>
        <h2>Bombing raids on Banbury</h2>
        <p>While nearby towns such as Coventry were bombed heavily during World War II, Banbury escaped heavy damage and
          was in fact a temporary home to many evacuees from London. The town was badly hit on just two occasions, only
          one of which led to casualties.</p>
        <p>In September 1940 at around 2am, two bombs fell on Banbury, and the canal lock (now at the back of the Castle
          Quay Shopping Centre) was hit, along with the office of the lock-keeper, George Bloomfield. A chunk of masonry
          from the damaged lock also hit one of the dormer windows of the former Town Gaol in the Market Place. Although
          the lock was badly damaged, the gates were not destroyed, otherwise the town could have been flooded. George's
          career as a lock keeper was ended and he joined the army, only to be medically discharged within two months.
          He moved eventually to Woodgreen Avenue with his wife Dorothy and son Maurice. The lock gates today still bear
          the date 1940.</p>
	      <p>At 2.35 in the afternoon of Thursday, 3rd October that same year, a lone Dornier bomber flew low over the
          Market Place, so low that shoppers could clearly see the pilot. It dropped six bombs on the Banbury Gas Works
          and Great Western Railway Goods Yard. Two of the three gas holders and part of the works' purification plant
          were destroyed, causing £20,000 worth of damage, and a fire which burned fiercely for about two hours. The
          office of the manager, Mr W. R. Day, was hit but he was unharmed. The gas supply to the town was cut off and not
          restored for six days.</p>
	      <p>During the attack, which lasted just one minute, significant damage was done to the railway yard. The worst
          of this was a direct hit on the Mess Room, a brick building with a slate roof, adjacent to the new Goods
          Warehouse. Six men inside the building were killed as the bomb exploded, another four injured. The mess room
          contained several thin sheet metal lockers, which suffered severe fragmentation.</p>
	      <p>Bombs also hit the railway siding and the down main line, 30 feet from the Signal Cabin. One rail was cut,
          the tracks lifted and the signals were damaged. A store hut containing barrels of oil was hit, causing a
          fierce fire. Goods services were severely disrupted, and full service was not resumed until 8pm that evening.
        </p>
        <p>Had the raid happened slightly earlier in the afternoon the death toll could have been much higher, as there
          had been a team of platelayers at work on the main railway line. Three of the men killed in this attack are
          listed on the Banbury War Memorial (Martin Humphrey, George Noakes, and Richard Parker); it is assumed that
          the other three are listed elsewhere. To follow is a complete list of the six men killed:</p>
        <ul className="list-disc list-inside">
          <li><strong>William Harry Batchelor</strong>, aged 32, son of Mr and Mrs Harry Batchelor of Helmdon, Brackley,
          husband of Annie Elizabeth Batchelor of Greatworth. Injured 3rd October 1940; died the next day at the
          Horton Hospital.</li>
          <li><strong>Frederick John Hirons</strong>, aged 62, of Church Street, Bodicote; died 3rd October 1940 at the
          Horton Hospital.</li>
          <li><strong>Martin Humphrey</strong>, aged 31, of Gorse Cottage, Thorpe Mandeville; died 3rd October 1940 at
          the Horton Hospital.</li>
          <li><strong>George Henry Noakes</strong>, aged 51, husband of E. D. Noakes of 17 Castle St. West; died 3rd
          October 1940 at the Horton Hospital.</li>
          <li><strong>Richard Walter Parker</strong>, aged 61, husband of Florrie Parker of 28 Britannia Road; died 3rd
          October 1940 at the Horton Hospital.</li>
          <li><strong>Thomas Webb</strong>, aged 56, Home Guard, husband of Emma Webb of Manor House, Drayton; died 3rd
          October 1940 at the Horton Hospital.</li>
        </ul>
        <p>Further raids occurred later on in 1940 when five bombs fell in an empty field at the back of the Bowling
          Green Inn, Overthorpe Road, possibly as a result of a Shell Filling Station which had been located there
          during World War I.</p>
        <p>Towards the end of the war it was reported that during the early hours of the morning a German plane flew
          along West Street, machine gunning the houses there, before doing the same to some old cottages on the corner
          of Bath Road.</p>
        <p><em>Sources: Letter from G C Hartland of Beargarden Road / Civilian Roll of Honour 1939-1945 / Ted Hanson,
          Banbury Citizen, September 4th 1989 / Air Raid Damage Report Serial No. 31 by L Kirk Greene RTIO (National
          Archives ref HO199/129).</em></p>
        <p className="mt-6 text-center"><Link href="/wartime-banbury">Back to Wartime Banbury</Link></p>
      </>
    }/>
  )
}
