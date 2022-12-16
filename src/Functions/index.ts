export function resolveLocation(){
    
}

export function clipString( str: String ): String{
    return `${str.length>10?`${str.slice(0, 10)}...`:str}`
}