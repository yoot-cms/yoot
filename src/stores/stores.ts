import { writable } from "svelte/store";

export const modal1State = writable(true)

export const modal2State = writable(true)

let entity: IEntity = {
    name:"",
    fields:[]
}

export const EntityBuilderContent = writable(entity)

interface IEntity{
    name: string
    fields: Array<{ name: string, type: string }>
}