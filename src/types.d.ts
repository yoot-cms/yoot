export type containerData = {
    _id: String,
    name: String,
    entities: Number,
    ressources: Number,
    owner: String,
    created_at: String,
}

export type fetchContainerResponse = {
    status: Number,
    data: containerData[]
}