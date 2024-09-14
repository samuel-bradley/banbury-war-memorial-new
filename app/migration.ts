import mysql from 'mysql2/promise';
import { MemorialRecord, updateRecord } from './dynamoDb';

export default async function runMigration() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'UB3cAYyRS1cNbo6BENr5KR%kKVoqxbT4&#6a!9o9J',
    database: 'banbury_war_memorial_database',
  });

  await connection.execute(`
    SELECT 
      p.person_id,
      p.name_on_memorial,
      p.full_name,
      r.rank_name,
      p.service_details,
      p.age_at_death,
      p.date_of_death,
      b.place_name,
      p.parents,
      p.mother_maiden_name,
      p.parents_married_info,
      p.spouse,
      p.wife_maiden_name,
      p.married_info,
      p.cemetery,
      p.additional_info,
      p.memorial_panel
    FROM persons p
    LEFT JOIN birth_places b ON p.birth_place_id = b.birth_place_id
    LEFT JOIN ranks r ON p.rank_id = r.rank_id
  `).then(([rows, fields]: [any, any]) => {
    const memorialRecords = rows.map((row: { person_id: any; name_on_memorial: any; memorial_panel: any; full_name: any; rank_name: any; service_details: any; age_at_death: any; date_of_death: string; place_name: any; parents: any; mother_maiden_name: any; parents_married_info: any; spouse: any; wife_maiden_name: any; married_info: any; cemetery: any; additional_info: any; }) => {

      const parseDate = (dateString: string): string | null => {
        if (!dateString) return null;
        
        const [day, month, year] = dateString.split('/');
        if (day && month && year) {
          // Create ISO 8601 date string in the format YYYY-MM-DD
          return new Date(`${year}-${month}-${day}`).toISOString();
        }
        return null;
      };

      return {
        nameInUrl: row.person_id,
        nameOnMemorial: row.name_on_memorial,
        memorialPanel: row.memorial_panel,
        fullName: row.full_name || null,
        rank: row.rank_name || null,
        serviceDetails: row.service_details || null,
        ageAtDeath: row.age_at_death || null,
        dateOfDeath: row.date_of_death ? parseDate(row.date_of_death) : null,
        placeOfBirth: row.place_name || null,
        parents: row.parents || null,
        motherMaidenName: row.mother_maiden_name || null,
        parentsMarriageDetails: row.parents_married_info || null,
        wife: row.spouse || null,
        wifeMaidenName: row.wife_maiden_name || null,
        marriageDetails: row.married_info || null,
        cemetery: row.cemetery || null,
        additionalInfo: row.additional_info || null
      } as MemorialRecord;
    });
    memorialRecords.map(async (record: MemorialRecord) => await updateRecord(record))
  });
  
  await connection.end();
}
