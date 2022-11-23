import { writable } from "svelte/store";

export const modal1State = writable(true)

export const modal2State = writable(true)

let entity: IEntityFields = {
    fields:[]
}

export const EntityBuilderContent = writable(entity)

interface IEntityFields{
    fields: Array<{ name: string, type: string }>
}