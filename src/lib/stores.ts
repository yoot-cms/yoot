import { writable } from "svelte/store"

export const location = writable("")

export const breadcrumb_items = writable<{ title:string, path:string }[]>([ { title:"Projects", path:"/console/projects" } ])
export const show_create_project = writable(false)
export const show_create_entity = writable(false)
