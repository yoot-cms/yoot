import axios from "axios"
import { api_url } from "../config"
import { containers_store} from "../stores"

export function resolveLocation(){
    
}

export function clip_string( str: string ): string{
    return `${str.length>10?`${str.slice(0, 10)}...`:str}`
}
