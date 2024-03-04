import Image from "next/image";
import Link from "next/link";
import Main from "../main";

export default function About() {
  return (
    <Main pageName="about" heading="About" content = {
      <>
        <h2>About the memorial</h2>
        <p>In <Link href="https://www.banburystmary.org.uk/">St Mary's Church</Link>, on Horse Fair, Banbury, there is a
            memorial listing the names of the town's men who died in the Second World War. This memorial consists of
            three panels: one central panel containing 78 names, which dates from just after the war, and two further
            panels to the left and right which were added in 2003:</p>
        <div className="items-center mb-4">
            <Link href="memorial.jpg" target="_blank" title="Photograph of memorial panels (opens in new tab)">
                <Image src="/memorial_small.jpg" alt="Photograph of memorial panels" width={600} height={358} className="border rounded mx-auto"/>
            </Link>
        </div>
        <p>Mr. Harry Cowie, war veteran and vice president of the <Link href="http://counties.britishlegion.org.uk/branches/banbury">
            Banbury branch of the Royal British Legion</Link>, spent years researching other names which should have been
            on the original memorial, but were not. Thanks to his work, the two further panels with an additional 34 and
            22 names were added to the left and right of the original memorial.</p>
        <p>The men listed on the memorial include the following:</p>
        <ul className="list-disc list-inside">
            <li>66 who were in the Army (including 14 from the Oxford &amp; Bucks Light Infantry and 15 from
                Anti-tank regiments)</li>
            <li>38 who were in the RAF (including the Royal Air Force Volunteer Reserve)</li>
            <li>9 who were in the Royal and Merchant Navy</li>
            <li>4 who were in the Royal Engineers</li>
            <li>3 who were in the Royal Marines</li>
            <li>3 who were civilians</li>
            <li>2 who were in the Military Police</li>
            <li>2 who were in the Reconnaissance Corps</li>
            <li>1 who was in the Life Guards and</li>
            <li>1 who was in the Royal Australian Air Force</li>
        </ul>
        <p>The youngest man on the memorial was 17 (<Link href="/memorial/Williams%2C%20S%20J%20Q">Stuart John Quare
            Williams</Link>, a Cadet in the Merchant Navy) and the oldest was 61 (<Link href="/memorial/Parker%2C%20R%20W">
            Richard Walter Parker</Link>, civilian).</p>
        <p>The earliest date of death is 20/12/1939 (<Link href="/memorial/Selby%2C%20D%20C">Donald Cranston Selby</Link>,
            killed at a railway crossing) and the latest is 17/10/1956 (<Link href="/memorial/O%20Carroll%2C%20M">Michael
            O'Carroll</Link>, accidentally shot while on guard duty in Cyprus).</p>
        <p>To date, 3 men remain unidentified (<Link href="/memorial/Harrison%2C%20A%20R">A R Harrison</Link>, <Link href="/memorial/Taylor%2C%20E">
            E Taylor</Link> and <Link href="/memorial/Booth%2C%20S">S Booth</Link>).</p>

        <h2 className="text-2xl">About this site</h2>
        <p>These pages are dedicated to the men of Banbury who gave their lives in the Second World War. Their names and
            details are listed on the <Link href="/">Memorial</Link> page, and there is further information about our town
            during the war on the <Link href="/wartime-banbury">Wartime Banbury</Link> page.</p>
        <p>We have tried to identify all of the men listed on the memorial. The site lists all of the names on the three
            panels, and we have done further research using the <Link href="https://www.cwgc.org/">Commonwealth War Graves
            Commission</Link> and <Link href="https://www.freebmd.org.uk/"> FreeBMD</Link>, as well as information from documents
            and news clippings held by <Link href="https://www.oxfordshire.gov.uk/residents/leisure-and-culture/libraries/find-library/banbury-library">
            Banbury Library</Link>. We have also taken photographs of some graves. We have been as careful as we can with
            our research, but if we have made any mistakes, we hope you will <Link href="/contact">let us know</Link> so we
            can correct them.</p>
        <p>Hundreds of men from the Banbury area fought in the war; in the British Army, the Royal and Merchant Navies
            and in the Royal Air Force. Some were sent to Europe, to North Africa, the Middle East and the Far East,
            while others stayed in England and worked in support services, in essential jobs and in the Home Guard. This
            site is dedicated to them all, but in particular to the men who made the ultimate sacrifice so that future
            generations could live in freedom.</p>
        <p>It is important to us that these men are remembered, and do not become just names on a list.</p>
      </>
    }/>
  );
}
