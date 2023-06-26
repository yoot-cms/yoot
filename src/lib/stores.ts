import { writable } from "svelte/store"

export const location = writable("")
export const show_create_project = writable(false)
export const creating_project = writable(false)
