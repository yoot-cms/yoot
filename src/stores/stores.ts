import { writable } from "svelte/store";

export const location = writable("/containers")

export const entityBuilderIsVisible = writable(false)