import Image from 'next/image'
import Link from 'next/link'
import Main from '@/components/main'

export default function SouthamRoadBurials() {
  return (
    <Main pageName="southam-road-burials" heading="Wartime Banbury" content = {
      <>
        <h2>Southam Road Burials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p>Many of the men listed on the Banbury War Memorial are buried in the Southam Road Cemetery in Banbury.
              However, there are several other Second World War burials here, and these are listed below.</p>
            <p>The majority of these men and women were based at local air bases such as Chipping Warden, which is just
              a few miles north of Banbury. Many of them were young men from New Zealand, Canada, Australia and Poland.
              With the exception of Pte Kazimierz Budny, they are all buried together in the Second World War section of
              this beautiful and peaceful cemetery.</p>
          </div>
          <Image src="/southam-road-burials/southamrd.jpg" width={500} height={375} alt="Photograph of part of Southam Road Cemetery"
            className="lg:pl-4 py-4 lg:py-2"/>
        </div>
	      <p>The four men whose graves are shown below were killed along with Sgt F. J. Welsby on 16th June 1943 when
          their Wellington III (Z1721-W) aircraft caught fire and crashed at Compton Wynyates. They had taken off from
          Chipping Warden and were part of 12 OTU:</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
          <div>
            <Image src="/southam-road-burials/hpgriffith.jpg" width={288} height={384} alt="Photograph of gravestone of Hugh Phillip Griffith"/>
            <p>Flight Sergeant Hugh Phillip Griffith, Royal Australian Air Force, 416761, age 21.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/twadam.jpg" width={288} height={384} alt="Photograph of gravestone of Thomas Wilkie Adam"/>
            <p>Pilot Officer Thomas Wilkie Adam, Navigator, Royal Canadian Air Force, J/21975, age 22.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/ketroake.jpg" width={288} height={384} alt="Photograph of gravestone of Kenneth Edward Troake"/>
            <p>Sergeant Kenneth Edward Troake, Air Gunner, 1708058, age 19.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/gbbooth.jpg" width={288} height={384} alt="Photograph of gravestone of Gordon B. Booth"/>
            <p>Flight Officer Gordon B. Booth, Bomb Aimer, Royal Canadian Air Force (originally from Van Buren, Ohio,
              USA), J/21469, age 30.</p>
          </div>
        </div>
	      <p>The four men below were killed along with Sgt W G Denyer and Sgt K Mackenzie on 22nd September 1943 when
          their Wellington III (BK200-A) crashed on overshoot at Chipping Warden. They were part of 12 OTU.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
          <div>
            <Image src="/southam-road-burials/rcave.jpg" width={288} height={384} alt="Photograph of gravestone of Ronald Cave"/>
            <p>Sergeant Ronald Cave, Air Gunner, 1029887, age 21.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/wngould.jpg" width={288} height={384} alt="Photograph of gravestone of William Norman Gould"/>
            <p>Flight Sergeant William Norman Gould, Navigator, Royal Canadian Air Force, R/156749, age 19.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/klhart.jpg" width={288} height={384} alt="Photograph of gravestone of Kevin Leslie Hart"/>
            <p>Flight Sergeant Kevin Leslie Hart, Royal Australian Air Force, 409698, age 22.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/lsillito.jpg" width={288} height={384} alt="Photograph of gravestone of Leroy Sillito"/>
            <p>Flight Sergeant Leroy Sillito, Bomb Aimer Royal Canadian Air Force, R/159480, age 26.</p>
          </div>
        </div>
	      <p>The next two men died along with F/O W D Newel, Sgt K. J. Gehrmann and Sgt Young when their Wellington III
          (Z1717) crashed on 20th October 1943 after taking off from Chipping Warden on a training exercise. They were
          all part of 12 OTU.</p>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div>
            <Image src="/southam-road-burials/zwcdekkers.jpg" width={288} height={384} alt="Photograph of gravestone of Zeger Willem Casper Dekkers"/>
            <p>Sgt Zeger Willem Casper Dekkers, 1649902, Koninkrijk der Nederlanden (born 7th August 1916) age 27.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/darcolegate.jpg" width={288} height={384} alt="Photograph of gravestone of Donald Alfred Ross Colegate"/>
            <p>Sergeant Donald Alfred Ross Colegate, Navigator, 1389344, age 27.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
          <Image src="/southam-road-burials/wlpemberton.jpg" width={288} height={384} alt="Photograph of gravestone of William Leslie Pemberton"
            className=""/>
          <p className="">Sgt William Leslie Pemberton, 1262146, was killed along with F/S L. M. Sergeant, Sgt H. L.
            Williams, F/O R. A. J. Vagg on 12th February 1944 when their Wellington III (BK248) crashed after taking off
            from Chipping Warden on a training exercise. They were all part of 12 OTU.</p>
        </div>
	      <p>Both of the men below were killed on Wednesday 31st May 1944. Wellington BK157 of 12 OTU was on a fighter
          affiliation exercise when a wing failed, and it crashed at Swalcliffe. Also killed were F/Sgt E. Cotterell,
          F/Sgt J. H. McGregor, Sgt J. A. Oliver, Sgt F. J. Pack and Sgt J. H. Nixon. F/O Driver had completed a tour
          with 104 Squadron in the Middle East.</p>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div>
            <Image src="/southam-road-burials/ewblakeman.jpg" width={288} height={384} alt="Photograph of gravestone of Ernest Walter Blakeman"/>
            <p>Sgt Ernest Walter Blakeman, 1837046, age 24</p>
          </div>
          <div>
            <Image src="/southam-road-burials/dadriver.jpg" width={288} height={384} alt="Photograph of gravestone of Donald Arthur Driver"/>
            <p>Flying Officer Donald Arthur Driver DFM, 160678, age 20</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
          <Image src="/southam-road-burials/adspringett.jpg" width={288} height={384} alt="Photograph of gravestone of Alan Douglas Springett"/>
          <p>F/S Alan Douglas Springett, 747845 died aged 28 on Saturday 25th November 1944 along with the rest of the
            crew of Wellington X LN242's crew: Sgt R. M. High, Sgt E. F. Isterling, F/O G. Smith, Sgt J. Heap, Sgt J. R.
            Robinson and Sgt J. C. Carlyle. The Wellington from 12OTU suffered an engine failure on take-off that
            evening and crashed into Manor Farm, Upper Boddington. Mrs Evelyn Margaret Tester (nee Brazenor) and her
            children Carol Tester and Michael Tester, aged 3 and 2, died in the house. Mrs Tester's body was never
            recovered. Her husband, LAC Charles William R. Tester, was on duty at the Chipping Warden airfield at the
            time. Newspaper reports of the accident can be viewed at <a href="http://www.bbm69.co.uk/crash.html" target="_blank">http://www.bbm69.co.uk/crash.html</a>.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div>
            <Image src="/southam-road-burials/drputtick.jpg" width={288} height={384} alt="Photograph of gravestone of Derek Ronald Puttick"/>
            <p>Sgt Derek Ronald Puttick, 1807665, age 21, died during a training excercise on Friday 24th November 1944
              in Wellington X NA783, part of 12OTU.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/jfburns.jpg" width={288} height={384} alt="Photograph of gravestone of John Francis Burns"/>
            <p>Leading Aircraftman John Francis Burns, Royal Canadian Air Force R/102612, age 20. Killed on Sunday 27th
              September 1942. A member of 12 Operational Training Unit.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
          <Image src="/southam-road-burials/etjodonaghue.jpg" width={288} height={384} alt="Photograph of gravestone of Eugene Thomas John O'Donoghue"/>
          <p>Sgt Eugene Thomas John O'Donoghue, Air Bomber 913527, age 24, was killed on Wednesday 2nd December 1942
            during a training exercise in Wellington III BK250. A member of 12OTU. The Wellington swung out of control
            when taking off from Chipping Warden in a cross wind and hit the control tower and a civilian car, then
            burnt out against a hangar. Pilot Sgt B. F. McMurchy RCAF was unhurt. Sgt H. Walters and Sgt E. T.
            O&rsquo;Donoghue were seriously injured and died the next day. F/Sgt D. J. Phillips RCAF and Sgt G. A.
            Hutchinson were also injured. Two civilians were killed in the hangar. A total of 24 people were injured,
            including a WAAF in the control tower, who received burns.</p>
        </div>
        <p>The two civilians killed were:</p>
        <ul className="list-disc list-inside">
          <li>William Wooton, aged 48, son of Joseph Butlin and Catherine Elizabeth Wootton, of Sulgrave; husband of
            Dorothy Clara Wootton, of 6 Council Houses, Sulgrave.</li>
          <li>William Francis Fitzgibbon, aged 35, son of Thomas Fitzgibbon, of Fort West, Charleville, Co. Cork, Irish
            Republic.</li>
        </ul>
        <p>Both died on 1st December 1942 in the hangar at Chipping Warden where they were working.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
          <Image src="/southam-road-burials/eskirkpatrick.jpg" width={288} height={384} alt="Photograph of gravestone of Samuel Kirkpatrick"/>
          <p>Sgt Ernest Samuel Kirkpatrick, Observer, Royal New Zealand Air Force, 413091, age 21. Died Thursday 10th
            December 1942 in Wellington IC, DV777, whilst on a training exercise with 11OTU.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
          <Image src="/southam-road-burials/vwlstanion.jpg" width={288} height={384} alt="Photograph of gravestone of Vernon William Lamond Stanion"/>
          <p>Squadron Leader Vernon William Lamond Stanion DFC, 76018, age 35, died Thursday 24th December 1942. A
            member of 12OTU. Received his DFC in 1940: "On the night of the 17th April 1940, this officer was observer
            of an aircraft which reconnoitred northern Denmark, during which operation large concentrations of enemy
            aircraft were observed at Aalborg aerodrome. On the night of 20th April he was observer of an aircraft which
            carried out a two-run attack on Aalborg aerodrome under adverse weather conditions and in spite of intense
            opposition from the ground. A fire was started in one of the aerodrome buildings as a result of the second
            attack. He has displayed outstanding keenness and determination as Gunnery Leader and has set an excellent
            example to all other Air Gunners in his squadron."</p>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div>
            <Image src="/southam-road-burials/jllawrence.jpg" width={288} height={384} alt="Photograph of gravestone of Jean Lawrence"/>
            <p>Aircraftwoman 1st Class Jean Lawrence, Women's Auxilary Air Force 2041172, age ? Killed Saturday 6th
              November 1943. A member of 12OTU.</p>
          </div>
          <div>
            <Image src="/southam-road-burials/wrose.jpg" width={288} height={384} alt="Photograph of gravestone of Walter Rose"/>
            <p>Private Walter Rose, 5726073, 2nd Bat., The Dorsetshire Regiment. Died 10th March 1942, aged 22. Son of
              William A. Rose and Phillis E. Rose, of Kidderminster, Worcestershire.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
          <Image src="/southam-road-burials/pmcgowan.jpg" width={288} height={384} alt="Photograph of gravestone of Patrick McGowan"/>
          <p>Sgt Patrick McGowan, Air Gunner 1901671, age 21. Killed whilst on an 12OTU training exercise on Wednesday
            18th April 1945, in Wellington X LP286. F/Sgt W. J. Hillier, Sgt H Mairs, Sgt A. G. Grant, Sgt J. B. Egan
            and Sgt P. McGowan were all killed, while Sgt P. V. Birch was injured. The Wellington crashed at Chipping
            Warden while trying to land on one engine.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <Image src="/southam-road-burials/rblapsley.jpg" width={288} height={384} alt="Photograph of gravestone of Robert Balfour Lapsley"/>
          <p>Sgt Robert Balfour Lapsley, Pilot Royal New Zealand Air Force, 416122, age 20. Died 12th December 1942. Son
            of Robert Balfour Lapsley and Bertha Norman Lapsley, of Mornington, Otago, New Zealand. Wellington III BK243
            crashed on a training exercise from Turweston (12OTU).</p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 pb-4">
          <Image src="/southam-road-burials/kbudny.jpg" width={288} height={384} alt="Photograph of gravestone of Kazimierz Budny"/>
          <Image src="/southam-road-burials/kbudny1.jpg" width={384} height={288} alt="Photograph of gravestone of Kazimierz Budny"/>
          <p>Pte Kazimierz Budny, 2nd Corps, Polish Resettlement Corps. Died 27th September 1947, age 23.</p>
        </div>
        <p className="mt-6 text-center"><Link href="/wartime-banbury">Back to Wartime Banbury</Link></p>
      </>
    }/>
  )
}
