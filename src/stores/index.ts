import { writable } from "svelte/store";
import type { containerData } from "../types";
type user_data  = {
    token?: string,
    user_name?: string,
    user_email?: string
}

export const location = writable("/containers")

export const entityBuilderIsVisible = writable(false)

let containers_array: containerData[] = []

export const containers_store = writable(containers_array)

let user_object : user_data = {}

export const user_store = writable(user_object)