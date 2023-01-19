export type containerData = {
    _id: string,
    name: string,
    entities: Number,
    ressources: Number,
    owner: string,
    created_at: string,
}

export type fetchContainerResponse = {
    status: Number,
    data: containerData[]
}