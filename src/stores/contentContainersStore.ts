import { writable } from "svelte/store";

interface IContentContainer{
    name: string
}

let contentContainersArray : IContentContainer[] = []

export const ContentContainers = writable(contentContainersArray)