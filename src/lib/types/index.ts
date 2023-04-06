export type Log = "WARN" | "ERR" | "INFO"


export type Migration = {
    version: number,
    description? : string,
    keyspace: string,
    tables: Array<Record<string, unknown>> 
}
