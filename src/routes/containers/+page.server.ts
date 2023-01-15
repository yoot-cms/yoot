import axios from "axios"
import type { PageServerLoad } from "./$types"
import type { containerData } from "src/types"

type response = {
    status: Number,
    data: containerData[]
}

export const load = (async ()=>{
    const result = await axios.get(
        "http://127.0.0.1:8000/container/get_all",
        {
            headers:{
                Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjQwMDAwMDAwMDAsImVtYWlsIjoidGVzdDcyIn0.LlzDcMIaChsUjp7bF2GoHxrrb-jqLgTUHXjHRTe5zyo"
            }
        }
    ).then((res)=>{
        return res.data
    }).catch(err=>{
        return {
            status: err.response.status
        }
    })
    return result as response
}) satisfies PageServerLoad