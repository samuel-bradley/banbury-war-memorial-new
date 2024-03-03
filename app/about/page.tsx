import Image from "next/image";
import Navigation from "../navigation";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col gap-y-5 items-center p-24 font-sans">
      <Navigation currentPage="about"/>

      <h1 className="text-4xl">About</h1>
      <div className="max-w-3xl">
        
        <h2>About the memorial</h2>
        <p>In <a href="https://www.banburystmary.org.uk/">St Mary's Church</a>, on Horse Fair, Banbury, there is a
            memorial listing the names of the town's men who died in the Second World War. This memorial consists of
            three panels: one central panel containing 78 names, which dates from just after the war, and two further
            panels to the left and right which were added in 2003:</p>
        <div className="items-center mb-4">
            <a href="memorial.jpg" target="_blank" title="Photograph of memorial panels (opens in new tab)">
                <Image src="/memorial_small.jpg" alt="Photograph of memorial panels" width={600} height={358} className="border rounded mx-auto"/>
            </a>
        </div>
        <p>Mr. Harry Cowie, war veteran and vice president of the <a href="http://counties.britishlegion.org.uk/branches/banbury">
            Banbury branch of the Royal British Legion</a>, spent years researching other names which should have been
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
        <p>The youngest man on the memorial was 17 (<a href="/memorial/Williams%2C%20S%20J%20Q">Stuart John Quare
            Williams</a>, a Cadet in the Merchant Navy) and the oldest was 61 (<a href="/memorial/Parker%2C%20R%20W">
            Richard Walter Parker</a>, civilian).</p>
        <p>The earliest date of death is 20/12/1939 (<a href="/memorial/Selby%2C%20D%20C">Donald Cranston Selby</a>,
            killed at a railway crossing) and the latest is 17/10/1956 (<a href="/memorial/O%20Carroll%2C%20M">Michael
            O'Carroll</a>, accidentally shot while on guard duty in Cyprus).</p>
        <p>To date, 3 men remain unidentified (<a href="/memorial/Harrison%2C%20A%20R">A R Harrison</a>, <a href="/memorial/Taylor%2C%20E">
            E Taylor</a> and <a href="/memorial/Booth%2C%20S">S Booth</a>).</p>

        <h2 className="text-2xl">About this site</h2>
        <p>These pages are dedicated to the men of Banbury who gave their lives in the Second World War. Their names and
            details are listed on the <a href="/">Memorial</a> page, and there is further information about our town
            during the war on the <a href="/wartime-banbury">Wartime Banbury</a> page.</p>
        <p>We have tried to identify all of the men listed on the memorial. The site lists all of the names on the three
            panels, and we have done further research using the <a href="https://www.cwgc.org/">Commonwealth War Graves
            Commission</a> and <a href="https://www.freebmd.org.uk/"> FreeBMD</a>, as well as information from documents
            and news clippings held by <a href="https://www.oxfordshire.gov.uk/residents/leisure-and-culture/libraries/find-library/banbury-library">
            Banbury Library</a>. We have also taken photographs of some graves. We have been as careful as we can with
            our research, but if we have made any mistakes, we hope you will <a href="/contact">let us know</a> so we
            can correct them.</p>
        <p>Hundreds of men from the Banbury area fought in the war; in the British Army, the Royal and Merchant Navies
            and in the Royal Air Force. Some were sent to Europe, to North Africa, the Middle East and the Far East,
            while others stayed in England and worked in support services, in essential jobs and in the Home Guard. This
            site is dedicated to them all, but in particular to the men who made the ultimate sacrifice so that future
            generations could live in freedom.</p>
        <p>It is important to us that these men are remembered, and do not become just names on a list.</p>
      </div>
    </main>
  );
}
