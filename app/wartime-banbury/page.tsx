import Image from "next/image"
import Link from "next/link"
import Main from "../main"

export default function WartimeBanbury() {
  return (
    <Main pageName="wartime-banbury" heading="Wartime Banbury" content = {
      <>
        <p>Find out more about life in Banbury during the years of World War II:</p>
        <nav className="m-4 mb-8 pl-2 border-l-4">
          <ul>
            <li><Link href="/wartime-banbury/bombing-raids">Bombing raids on Banbury</Link></li>
            <li><Link href="/wartime-banbury/dummy-ally">The "Dummy Ally" factory and the Alcan Roll of Honour</Link></li>
            <li><Link href="/wartime-banbury/southam-road-burials">Southam Road Cemetery WWII burials</Link></li>
            <li><Link href="/wartime-banbury/st-marys-log-book">St. Mary's Primary School Log Book</Link></li>
            <li><Link href="/wartime-banbury/margaret-cooper">Life in Wartime Banbury - Margaret Cooper</Link></li>
            <li><Link href="/wartime-banbury/air-crash-in-bodicote">Air Crash in Bodicote 1942</Link></li>
            <li><Link href="/wartime-banbury/air-crashes-in-adderbury-and-milton">Air Crashes in Adderbury and Milton</Link></li>
          </ul>
        </nav>
        <Image src="/war-weapons-week.jpg" width={460} height={555} alt="War Weapons Week poster, April 1941"
          className="mx-auto border"/>
      </>
    }/>
  )
}
