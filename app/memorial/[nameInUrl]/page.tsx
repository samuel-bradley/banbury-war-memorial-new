import { retrieveRecord } from "../../dynamoDb";
import Main from "../../main";

export default async function Page({ params }: { params: { nameInUrl: string } }) {
  const record = await retrieveRecord(params.nameInUrl)
  if (record) {
    return (
      <Main pageName={record.nameInUrl} heading={record.nameOnMemorial} content = {
        <>
        </>
      }/>
    )
  }
  return (
    'Not Found' // TODO proper 404 page
  )
}