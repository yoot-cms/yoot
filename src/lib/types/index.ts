export type Log = "WARN" | "ERR" | "INFO"


export type Migration = {
    version: number,
    description? : string,
    keyspace: string,
    tables: Array<Record<string, unknown>> 
}

export type AuthCode = {
    code: string,
    generated_for: string,
    used: boolean,
    validity_date: string
}
