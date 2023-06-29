import { writable } from "svelte/store"

export const location = writable("")

export const breadcrumb_items = writable<{ title:string, path:string }[]>([ { title:"Projects", path:"/console/console" } ])
export const show_create_project = writable(false)
