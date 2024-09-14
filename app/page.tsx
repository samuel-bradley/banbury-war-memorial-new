import { redirect } from 'next/navigation'
import runMigration from './migration'

export default async function Page() {
  await runMigration();
  redirect('/memorial')
}
