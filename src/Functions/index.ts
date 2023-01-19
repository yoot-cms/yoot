import axios from "axios"
import { apiUrl } from "../config"
import { containers_store} from "../stores"

export function resolveLocation(){
    
}

export function clipString( str: string ): string{
    return `${str.length>10?`${str.slice(0, 10)}...`:str}`
}

export async function pullContainers(): Promise<boolean> {
    const result = await axios.get(
        "http://127.0.0.1:8000/container/get_all",
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    .then(res=>{
        console.log(res.data)

        return true
    })
    .catch(_=>{
        return false
    })
    
    return result
}