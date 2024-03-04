import Image from "next/image";
import Link from "next/link";
import Main from "../main";

export default function Memorial() {
  return (
    <Main pageName="wartime-banbury" heading="Wartime Banbury" content = {
      <>
        <p>Find out more about life in Banbury during the years of World War II:</p>
        <nav className="m-4 mb-8 pl-2 border-l-4">
          <ul>
            <li><Link href="/bombing-raids">Bombing raids on Banbury</Link></li>
            <li><Link href="/dummy-factory">The "Dummy Ally" factory &amp; the Alcan Roll of Honour</Link></li>
            <li><Link href="/southam-road-burials">Southam Road Cemetery WWII burials</Link></li>
            <li><Link href="/st-marys-log-book">St. Mary's Primary School Log Book</Link></li>
            <li><Link href="/margaret-cooper">Life in Wartime Banbury - Margaret Cooper</Link></li>
            <li><Link href="/air-crash-in-bodicote">Air Crash in Bodicote 1942</Link></li>
            <li><Link href="/air-crash-in-adderbury">Air Crash in Adderbury 1944</Link></li>
          </ul>
        </nav>
        <div>
          <Image src="/war-weapons-week.jpg" width={460} height={555} alt="War Weapons Week poster, April 1941"
            className="mx-auto border"/>
        </div>
      </>
    }/>
  )
}
