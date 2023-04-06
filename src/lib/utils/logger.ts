import type { Log } from "$lib/types"

const logger = (log_type: Log, log: string, location: string) => {
    switch (log_type) {
        case "WARN":
            console.warn(`${new Date().toLocaleString()} :: ${location} :: ${log} `)
        case "ERR":
            console.error(`${new Date().toLocaleString()} :: ${location} :: ${log} `)
        case "INFO":
            console.log(`${new Date().toLocaleString()} :: ${location} :: ${log} `)
    }
}

export default logger


