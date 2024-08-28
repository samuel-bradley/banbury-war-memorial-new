import { MemorialRecord, retrieveRecord } from "../../dynamoDb"
import Main from "../../main"

export default async function Page({ params }: { params: { nameInUrl: string } }) {
  const record = await retrieveRecord(params.nameInUrl)
  const emptyText = 'unknown'

  const dateOfDeathText = (record: MemorialRecord): string => {
    if (!record.dateOfDeath) return emptyText
    return new Date(record.dateOfDeath).toLocaleDateString()
  }

  if (record) {
    return (
      <Main pageName={record.nameInUrl} heading={record.nameOnMemorial} content = {
        <>
          <ul>
            <li><strong>Memorial panel:</strong> {record.memorialPanel}</li>
            <li><strong>Full name:</strong> {record.fullName ?? emptyText}</li>
            <li><strong>Rank:</strong> {record.rank ?? emptyText}</li>
            <li><strong>Service details:</strong> {record.serviceDetails ?? emptyText}</li>
            <li><strong>Age at death:</strong> {record.ageAtDeath ?? emptyText}</li>
            <li><strong>Date of death:</strong> {dateOfDeathText(record)}</li>
            <li><strong>Place of birth:</strong> {record.placeOfBirth ?? emptyText}</li>
            <li><strong>Parents:</strong> {record.parents ?? emptyText}</li>
            <li><strong>Mother's maiden name:</strong> {record.motherMaidenName ?? emptyText}</li>
            <li><strong>Parents' marriage details:</strong> {record.parentsMarriageDetails ?? emptyText}</li>
            <li><strong>Wife:</strong> {record.wife ?? emptyText}</li>
            <li><strong>Wife's maiden name:</strong> {record.wifeMaidenName ?? emptyText}</li>
            <li><strong>Marriage details:</strong> {record.marriageDetails ?? emptyText}</li>
            <li><strong>Cemetery:</strong> {record.cemetery ?? emptyText}</li>
            <li><strong>Additional information:</strong>
              {record.additionalInfo && <div dangerouslySetInnerHTML={{ __html: record.additionalInfo }}/>}
              {!record.additionalInfo && ' none'}
            </li>
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