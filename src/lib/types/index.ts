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

export type Plan = "wood" | "bronze" | "silver" | "gold"

export type User = {
    email: string,
    id: string,
    profile_picture: string,
    plan: Plan
}


export type AuthCodeData = {
    data: {
        [key: string]: AuthCode
    }
}
