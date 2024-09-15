import Image from 'next/image'
import Link from 'next/link'
import Main from '@/components/main'

export default function StMarysLogBook() {
  return (
    <Main pageName="st-marys-log-book" heading="Wartime Banbury" content = {
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Image src="/st-marys.jpg" width={640} height={480} alt="Photograph of St. Mary's School" className="border mt-2"/>
          <div>
            <h2>St Mary's Primary School Log Book</h2>
            <p>The following are extracts from the Log Book of St Mary's Primary School, Southam Road, Banbury,
              reproduced here by kind permission of the school. At the time of the Second World War, boys and girls were
              still educated separately and each department would have had its own headteacher.</p>
            <p>The daily record of the Girls Department was kept until her retirement on 31st August 1944 by
              headmistress Ethel Alice Mardell. She was succeeded after this date by Ada M. Bennett. Miss Mardell was
              born in Edmonton, London in 1884, and both her mother and aunt were also teachers.</p>
          </div>
        </div>
        <p>The Log Book for the years 1939 to 1945 begins with the school being closed for two weeks, due to the
          outbreak of war. This period covers what is known as "The Phoney War", when very little actually happened.
          Although the school was holding frequent air raid drills, the first air raid warning is not mentioned until
          15th November 1940, the night that Coventry was bombed.</p>
        <p>In all, a total of 31 air raids are mentioned in the log book, which seems surprising given that Banbury
          itself was only hit twice. However, the sirens would have sounded whenever enemy planes were sighted, and
          often they would be on their way north to industrial towns such as Coventry and Birmingham, or aiming for the
          Aluminium Factory to the north of the town.</p>
        <div className="logEntry mt-4">
          <span>4th September 1939</span>
          <blockquote>School should have re-opened today but owing to the War we were closed for a further fortnight.</blockquote>
        </div>
        <div className="logEntry">
          <span>18th September 1939</span>
          <blockquote>School re-opened this morning. I have absorbed into the school fourteen girls from the Cyril
            Jackson School, London and also sixteen Self Evacuees from various parts of the country. Two teachers from
            the Cyril Jackson School have also been placed here for the present. These are Miss Pickard and Mrs Thomas.</blockquote>
        </div>
        <div className="logEntry">
          <span>22nd September 1939</span>
          <blockquote>"Gas Mask" and "Shelter" drill have been taken every day this week.</blockquote>
        </div>
        <div className="logEntry">
          <span>22nd September 1939</span>
          <blockquote>The fourteen Cyril Jackson girls have left this department this afternoon and are now to attend
            the Congregational Hall.</blockquote>
        </div>
        <div className="logEntry">
          <span>30th October 1939</span>
          <blockquote>Air raid warning practices are being taken frequently to get the children thoroughly used to them.</blockquote>
        </div>
        <div className="logEntry">
          <span>8th January 1940</span>
          <blockquote>Miss D Crabb has been recalled to the Bow Central School.</blockquote>
        </div>
        <div className="logEntry">
          <span>14th June 1940</span>
          <blockquote>School closed all day in order that teachers might assist with billeting.</blockquote>
        </div>
        <div className="logEntry">
          <span>17th June 1940</span>
          <blockquote>The Education Committee again closed school in order that teachers might assist with billeting.</blockquote>
        </div>
        <div className="logEntry">
          <span>23rd June 1940</span>
          <blockquote>64 evacuees registered this morning.</blockquote>
        </div>
        <div className="logEntry">
          <span>26th June 1940</span>
          <blockquote>Admitted evacuees to make total up to accommodation of 200.</blockquote>
        </div>
        <div className="logEntry">
          <span>28th June 1940</span>
          <blockquote>A verbal message came from Mr Webb that if the air-raid warning goes during the night the children
            are not to attend school until 10am the next morning.</blockquote>
        </div>
        <div className="logEntry">
          <span>1st July 1940</span>
          <blockquote>Mrs Tansley (LCC) and Mrs Grey (West Ham) both evacuated teachers, commenced duty at this school
            at 9am today.</blockquote>
        </div>
        <div className="logEntry">
          <span>18th September 1940</span>
          <blockquote>70 newly evacuated children registered here this morning and two this afternoon. I am admitting 21
            of these tomorrow, making my roll 225.</blockquote>
        </div>
        <div className="logEntry">
          <span>7th October 1940</span>
          <blockquote>I admitted ? evacuees this morning.</blockquote>
        </div>
        <div className="logEntry">
          <span>7th October 1940</span>
          <blockquote>Four evacuated teachers have commenced duties in this department this morning.</blockquote>
        </div>
        <div className="logEntry">
          <span>15th November 1940</span>
          <blockquote>"Raiders Passed" was not given until 6.15 this morning, therefore school opened at 10am.<br/>
            (NB. Massive bombing of Coventry took place)</blockquote>
        </div>
        <div className="logEntry">
          <span>19th November 1940</span>
          <blockquote>School opened at 10am as "Raiders Passed" was not given until after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>20th November 1940</span>
          <blockquote>"Raiders Passed" was given after 11pm, therefore school opened at 10am.</blockquote>
        </div>
        <div className="logEntry">
          <span>12th December 1940</span>
          <blockquote>Opened school at 10am as "Raiders Passed" was not given until after 11pm last night.</blockquote>
        </div>
        <div className="logEntry">
          <span>13th December 1940</span>
          <blockquote>Opened school at 10am as "Raiders Passed" was not given until after 11pm last night.</blockquote>
        </div>
        <div className="logEntry">
          <span>8th January 1941</span>
          <blockquote>The "Alert" was given at 3.5 this afternoon and the Raiders passed at 3.20pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>10th January 1941</span>
          <blockquote>The "Raiders Passed" was given after 11pm, therefore school opened at 10am today.</blockquote>
        </div>
        <div className="logEntry">
          <span>7th March 1941</span>
          <blockquote>The "Alert" sounded at 3.40pm. Children went to shelters. "Raisers Passed" sounded at 4.35pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>12th March 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" went after 11pm last night.</blockquote>
        </div>
        <div className="logEntry">
          <span>13th March 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" went after 11pm last night.</blockquote>
        </div>
        <div className="logEntry">
          <span>14th March 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" went after 11pm last night.</blockquote>
        </div>
        <div className="logEntry">
          <span>18th March 1941</span>
          <blockquote>School assembled at 10am today owing to "Raiders Passed" being sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>8th April 1941</span>
          <blockquote>School assembled at 10am today owing to "Raiders Passed" being sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>9th April 1941</span>
          <blockquote>School assembled at 10am today owing to "Raiders Passed" being sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>21st April 1941</span>
          <blockquote>Mrs James (LCC) absent owing to house having been bombed.</blockquote>
        </div>
        <div className="logEntry">
          <span>19th to 26th April</span>
          <blockquote>War Weapons Week. The Girls Department raised &pound;132 14 7.</blockquote>
        </div>
        <div className="logEntry">
          <span>30th April 1941</span>
          <blockquote>School assembled at 10am today owing to "Raiders Passed" being sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>2nd May 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" was sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>5th May 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" was sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>7th May 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" was sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>8th May 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" was sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>9th May 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" was sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>10th May 1941</span>
          <blockquote>School assembled at 10am today as "Raiders Passed" was sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>30th May 1941</span>
          <blockquote>School assembled at 10am today owing to the "Raiders Passed" being sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>8th July 1941</span>
          <blockquote>Opened school at 10am today owing to the "Raiders Passed" being sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>14th July 1941</span>
          <blockquote>Opened school at 10am today as the "Raiders Passed" was sounded after 11pm.</blockquote>
        </div>
        <div className="logEntry">
          <span>18th July 1941</span>
          <blockquote>Opened school at 10am owing to "Raid".</blockquote>
        </div>
        <div className="logEntry">
          <span>1st September 1941</span>
          <blockquote>Miss Green and Mrs Grey have been recalled to West Ham. Miss Kendall and Miss Goodie, both LCC,
            have joined the Girsl Staff this morning. Admitted 29 evacuees from the Cyril Jackson School which has been
            closed.</blockquote>
        </div>
        <div className="logEntry">
        <span>16th September 1941</span>
          <blockquote>I attended the cinema this morning to assist in choosing films for children tomorrow for War
            Savings Campaign.</blockquote>
        </div>
        <div className="logEntry">
          <span>5th January 1942</span>
          <blockquote>Three evacuated teachers, Mrs James, Miss Brand and Miss Kendall have been recalled to London.</blockquote>
        </div>
        <div className="logEntry">
          <span>4th February 1942</span>
          <blockquote>Mrs Sewell absent this morning (husband has 48 hours leave).</blockquote>
        </div>
        <div className="logEntry">
          <span>25th March 1942</span>
          <blockquote>Mrs Groucott absent this afternoon and tomorrow as her husband has 48 hours leave.</blockquote>
        </div>
        <div className="logEntry">
          <span>25th June 1942</span>
          <blockquote>Opened school at 10 o'clock as the "Alert" sounded after 11pm last night.</blockquote>
        </div>
        <div className="logEntry">
          <span>24th July 1942</span>
          <blockquote>Owing to the Alert having sounded after 11pm school opened at 10 o'clock this morning.</blockquote>
        </div>
        <div className="logEntry">
          <span>28th July 1942</span>
          <blockquote>Owing to the Alert having sounded after 11pm school opened at 10 o'clock this morning.</blockquote>
        </div>
        <div className="logEntry">
          <span>31st July 1942</span>
          <blockquote>Owing to "Alert" having sounded after 11pm school opened at 10 o'clock this morning. Closed school
            for Summer Holiday at noon but owing to War school remained open for those who wished to attend.</blockquote>
        </div>
        <div className="logEntry">
          <span>11th November 1942</span>
          <blockquote>Remembrance day. The "Silence" was observed at 11 o'clock.</blockquote>
        </div>
        <div className="logEntry">
          <span>30th August 1943</span>
          <blockquote>19 girls admitted from Infants Dept, (15 local and 4 evacuees).</blockquote>
        </div>
        <div className="logEntry">
          <span>11th November 1943</span>
          <blockquote>Armistice Day. The two minutes service was observed.</blockquote>
        </div>
        <div className="logEntry">
          <span>4th February 1944</span>
          <blockquote>School opened at 10am today due to the "Alert".</blockquote>
        </div>
        <div className="logEntry">
          <span>15th March 1944</span>
          <blockquote>School opened at 10am this morning owing to the "Alert" last night.</blockquote>
        </div>
        <div className="logEntry">
          <span>21st August 1944</span>
          <blockquote>Seven evacuees admitted.</blockquote>
        </div>
        <div className="logEntry">
          <span>20th October 1944</span>
          <blockquote>This afternoon a party of VI, VII and VIII girls visited the "Dig for Victory" exhibition.</blockquote>
        </div>
        <div className="logEntry">
          <span>1st December 1944</span>
          <blockquote>Mrs Sewell was absent because her husband is home on leave from the Navy.</blockquote>
        </div>
        <div className="logEntry">
          <span>29th November 1944</span>
          <blockquote>Mr Mardon sent to inform us that the Poppy Day Collection in this department amounted to &pound;1
            9s 4 &frac12; d.</blockquote>
        </div>
        <div className="logEntry">
          <span>2nd March 1945</span>
          <blockquote>Metropolitan Evacuating Authorities' common entrance examination for Secondary Schools held in the
            boys' dept. Five entrants from this department.</blockquote>
        </div>
        <div className="logEntry">
          <span>8th and 9th May 1945</span>
          <blockquote>School closed for VE day celebrations.</blockquote>
        </div>
        <div className="logEntry">
          <span>1st June 1945</span>
          <blockquote>Some evacuees went for medical inspection.</blockquote>
        </div>
        <div className="logEntry">
          <span>28th September 1945</span>
          <blockquote>Closed school, Monday Oct 1st being Banbury's VE Day.</blockquote>
        </div>
        <div className="logEntry">
          <span>5th October 1945</span>
          <blockquote>The 'Thanks to the Services' Savings Campaign in school realised &pound;82 .3.10d.</blockquote>
        </div>
        <p className="mt-6 text-center"><Link href="/wartime-banbury">Back to Wartime Banbury</Link></p>
      </>
    }/>
  )
}
