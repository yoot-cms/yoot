import { writable } from "svelte/store";

export const modal1State = writable(true)

export const modal2State = writable(true)

let fields : { name: string, type: string }[] = []

export const EntityFields = writable(fields)
