import { writable } from "svelte/store"

export const location = writable("")

export const breadcrumb_items = writable<{ title:string, path:string }[]>([ { title:"Projects", path:"/console/projects" } ])

export const show_create_project = writable(false)

export const show_delete_project = writable(false)

export const show_create_entity = writable(false)

export const show_delete_entity = writable(false)

export const show_create_api_key = writable(false)

export const show_delete_api_key = writable(false)

export const api_key_store = writable("")

export const show_create_entry = writable(false)

export const show_delete_entry = writable(false)
