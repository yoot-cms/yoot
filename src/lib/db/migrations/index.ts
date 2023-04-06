import type { Migration } from "$lib/types";
const DB_ID = import.meta.env.DB_ID as string
const DB_REGION = import.meta.env.DB_REGION as string
const APP_TOKEN = import.meta.env.APP_TOKEN as string


export async function run(migration: Migration) {
    const name_space_exists = await fetch(
        `https://${DB_ID}-${DB_REGION}.apps.astra.datastax.com/api/rest/v2/schemas/keyspaces/${migration.keyspace}`,
        {
            headers: {
                "X-Cassandra-Token": APP_TOKEN,
                "Content-Type": "application/json"
            }
        }
    ).then(res => res.status)
        .catch(err => {
            console.log(err)
            return 500
        }) === 200

}
