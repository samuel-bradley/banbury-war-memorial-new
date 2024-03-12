import Image from "next/image";
import Link from "next/link";
import Main from "../../main";

export default function AirCrashInBodicote() {
  return (
    <Main pageName="air-crash-in-bodicote" heading="Wartime Banbury" content = {
      <>
        <h2>Air Crash in Bodicote 1942</h2>
        <h3>Background</h3>
        <p>There were several operational air bases close to Banbury during the Second World War. Chipping Warden to the
          north was home to 12 Operational Training Unit, but there were also bases at Upper Heyford, Shenington,
          Barford St. John, Bicester and Atherstone-on-Stour, to name just a few.</p>
        <p>It was not only during bombing missions that planes and crews were lost. Even experienced pilots could run
          into trouble on training exercises, due to mechanical failure, or poor weather conditions. The Midland
          Aircraft Recovery Group (MARG) research military aircraft crashes in the South West Midlands during the war,
          and their website lists 763 crashes in the region between the start of 1940 and the end of 1945.</p>
        <p>One such crash occurred in December of 1942, and involved a Wellington bomber which most likely took off from
          Atherstone-on-Stour, flying a routine 25 minute air test, with an experienced pilot and five other crew
          members aboard. For reasons which will never be fully understood, the bomber hit an elm tree and crashed into
          a valley to the west of Bodicote church.</p>
        <h3>The crash</h3>
        <p>Wellington BK517 was part of 23 Operational Training Unit. The parent unit was based at Pershore in
          Worcestershire, with a satellite airfield at Stratford (Atherstone-on-Stour), 30 miles north-west of Banbury.
          On Monday 28th December 1942, the Wellington was being piloted by Flying Officer John Gordon Byrne 112527,
          Royal Air Force Volunteer Reserve. He was a 22-year-old Flying Instructor and was 'screened' (i.e. had already
          participated in military operations). The flight was described on the aircraft accident card as an Air Test
          (Medical) which suggests that F/O Byrne was demonstrating that he was medically fit to fly.</p>
        <p>Also on board the bomber that day was an experienced (screened) Air Gunner, 26-year-old Flight Sergeant
          William McMillan, 967661, Royal Air Force Volunteer Reserve and a pupil Navigator, 26-year-old Canadian Flight
          Sergeant Jack Thompson McDonald (R/90083, Royal Canadian Air Force). The three other crew members/passengers
          were 20-year-old Leading Aircraftman Leslie Hamilton Nicholson, 1066387, Royal Air Force Volunteer Reserve;
          19-year-old Aircraftman 2nd Class (Flt. Mech. Engines) John Ernest George Beaumont, 1710222, Royal Air Force
          Volunteer Reserve and 19-year-old Aircraftman 2nd Class Granville Broadhurst, 1579235, Royal Air Force
          Volunteer Reserve.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="mb-4 bg-gray-800 p-1 rounded max-w-sm lg:max-w-none">
            <Link href="/air-crash-in-bodicote/john-gordon-byrne.jpg" target="_blank" title="Photograph of Flying Officer John Gordon Byrne in uniform (opens in new tab)">
              <Image src="/air-crash-in-bodicote/john-gordon-byrne.jpg" width={400} height={661} alt="Photograph of Flying Officer John Gordon Byrne in uniform"
                className="border border-gray-600 rounded"/>
            </Link>
            <div className="px-3 mt-2 mb-1 ml-1 border-l-4 border-gray-600 inline-block">
              <p className="mb-0">Photograph of Flying Officer (John) Gordon Byrne, kindly provided by Philip
                Byrne. Gordon was married on 29/9/42, just 13 weeks before the crash.</p>
            </div>
          </div>
          <div className="mb-4 bg-gray-800 p-1 rounded max-w-sm lg:max-w-none">
            <Link href="/air-crash-in-bodicote/john-thompson-mcdonald.jpg" target="_blank" title="Photograph of Flight Sergeant John Thompson McDonald (opens in new tab)">
              <Image src="/air-crash-in-bodicote/john-thompson-mcdonald.jpg" width={439} height={639} alt="Photograph of Flight Sergeant John Thompson McDonald"
                className="border border-gray-600 rounded"/>
            </Link>
            <div className="px-3 mt-2 mb-1 ml-1 border-l-4 border-gray-600">
              <p className="mb-0">Photograph of John Thompson McDonald (courtesy of Museum Strathroy Caradoc of
                Strathroy Ontario). Further information about him can be found <Link href="https://www.strathroymuseum.ca/en/whats-on/resources/Virtual-War-Memorial-Strathroy/McDonald-John-Thompson.pdf"
                target="_blank" title="Strathroy-Caradoc Museum PDF about John Thompson McDonald (opens in new tab)">here</Link>.</p>
            </div>
          </div>
        </div>
        <p>There is no record as to why the Wellington ran into difficulties. However, shortly before midday the
          aircraft was seen by a schoolboy and his mother in Bodicote, flying very low from the south-east, with one
          engine apparently smoking. It was not unusual for bombers to be seen flying very fast and very low over the
          village, but on this occasion the schoolboy saw the Wellington hit an elm tree, losing a wing and then
          crashing into a valley just beyond. When he got down to the crash site he saw a pile of wreckage which was
          still on fire, and the bodies of several airmen.</p>
        <p>The official aircraft accident card from 23 OTU states that the aircraft had flown into cloud without a
          wireless operator and had then crashed attempting to make landfall in bad weather. Members of MARG have in
          recent years investigated the crash site, which is situated on private land to the west of Bodicote Church,
          and interviewed the surviving eye-witness, Mr. Hall. Their report into the crash suggests that the aircraft
          was flying horizontally and at high speed prior to the crash - as evidenced by the lack of buried wreckage and
          the fact that the aircraft continued for around 400m after hitting the elm tree. It is possible that the pilot
          was flying low due to bad weather, in order to get his bearings. However, the aircraft was on a direct course
          to Stratford airbase which also suggests that the pilot already knew where he was. The eye-witness saw one
          engine smoking, but this could have been an exhaust trail caused by the aircraft travelling at full throttle.</p>
        <p>Given that this was a medical test flight, the MARG report suggests one possibility was that the pilot was
          flying fast and low in order to demonstrate his fitness. Certainly as an experienced pilot he would have been
          expected to be able to do this safely. Less than a month before, a Welllington from 22 OTU had flown into
          trees at Gaydon in poor visibility, killing all six crew members, so this type of accident was not uncommon.
          Additionally, with no wireless (radio) operator on board, the pilot would have been at a disadvantage. The
          wireless operator would receive transmissions from base, and could tune into beacons which would help pinpoint
          the aircraft's location. Presumably because the flight was only planned to be 25 minutes long on this
          occasion, a wireless operator was not deemed necessary. However, in the event of bad weather closing in, the
          Wellington could easily end up off course.</p>
        <p>We will never know for certain what caused Wellington BK517 to crash that December morning. The death
          certificates of Jack Thompson McDonald and William McMillan, both regsitered in Banbury, state that their
          deaths were due to "War Operations". It is certainly a tragedy that these young men came from all around the
          UK - in fact, all the way from Canada in the case of Jack McDonald - only to die in a field in Bodicote, miles
          from home. However, if the aircraft was for some reason in difficulties, it is worth remembering that they
          would have flown over the houses and shops of Bodicote village just seconds before the crash; the death toll
          that morning could potentially have been far higher. Perhaps the last thoughts of the crew of BK517 were for
          those below them on the ground.</p>
        <h3>The memorial</h3>
        <p>On Saturday 2nd June 2012, a dedication ceremony was held at the site of the crash, where a memorial boulder
          has been erected. Below are various newspaper articles covering this event:</p>
        <div className="items-center mb-4">
          <Link href="/air-crash-in-bodicote/memorial-article-1.jpg" target="_blank" title="Banbury Cake article about memorial (opens in new tab)">
            <Image src="/air-crash-in-bodicote/memorial-article-1.jpg" width={798} height={414} alt="Banbury Cake newspaper article entitled 'Memorial marks date of World War Two crash'"
              className="border border-gray-600 rounded"/>
          </Link>
        </div>
        <div className="items-center mb-4">
          <Link href="/air-crash-in-bodicote/memorial-article-2.jpg" target="_blank" title="Newspaper article about memorial unveiling (opens in new tab)">
            <Image src="/air-crash-in-bodicote/memorial-article-2.jpg" width={800} height={528} alt="Banbury Cake newspaper article entitled 'Village plans salute to war crash victims'"
              className="border border-gray-600 rounded"/>
          </Link>
        </div>
        <div className="items-center mb-4">
          <Link href="/air-crash-in-bodicote/memorial-article-3.jpg" target="_blank" title="Newspaper article about memorial inauguration (opens in new tab)">
            <Image src="/air-crash-in-bodicote/memorial-article-3.jpg" width={783} height={295} alt="Banbury Cake newspaper article entitled 'Village remembers servicemen who lost lives'"
              className="border border-gray-600 rounded"/>
          </Link>
        </div>
        <p>Source: MARG Site Report into Wellington BK517 at Bodicote, Oxfordshire, courtesy of Mark Evans.</p>
        <p className="mt-6 text-center"><Link href="/wartime-banbury">Back to Wartime Banbury</Link></p>
      </>
    }/>
  )
}
