import { retrieveRecord } from "../../dynamoDb";
import Main from "../../main";

export default async function Page({ params }: { params: { nameInUrl: string } }) {
  const record = await retrieveRecord(params.nameInUrl)
  if (record) {
    return (
      <Main pageName={record.nameInUrl} heading={record.nameOnMemorial} content = {
        <>
          <ul>
            <li><strong>Memorial panel:</strong> {record.memorialPanel}</li>
            <li><strong>Full name:</strong> {record.fullName}</li>
            <li><strong>Rank:</strong> {record.rank}</li>
            <li><strong>Service details:</strong> {record.serviceDetails}</li>
            <li><strong>Age at death:</strong> {record.ageAtDeath}</li>
            <li><strong>Date of death:</strong> {new Date(record.dateOfDeath).toLocaleDateString()}</li>
            <li><strong>Place of birth:</strong> {record.placeOfBirth}</li>
            <li><strong>Parents:</strong> {record.parents}</li>
            <li><strong>Mother's maiden name:</strong> {record.motherMaidenName}</li>
            <li><strong>Parents' marriage details:</strong> {record.parentsMarriageDetails}</li>
            <li><strong>Wife:</strong> {record.wife}</li>
            <li><strong>Wife's maiden name:</strong> {record.wifeMaidenName}</li>
            <li><strong>Marriage details:</strong> {record.marriageDetails}</li>
            <li><strong>Cemetery:</strong> {record.cemetery}</li>
            <li><strong>Additional information:</strong> {record.additionalInfo}</li>
          </ul>
          <p>If you have any corrections or further information to add, please <a href="/contact">get in touch</a>.</p>
          <a href='/'>Back to memorial list</a>
        </>
      }/>
    )
  }
  return (
    'Not Found' // TODO proper 404 page
  )
}