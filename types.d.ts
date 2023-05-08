type Todo = {
    userId:number,
    id: number,
    title:string,
    completed:boolean
}

type Appart = {
    "id": string,
    "title": string,
    "cover": string,
    "pictures": string[],
    "description": string,
    "host": {
        "name": string,
        "picture": string
    },
    "rating": string,
    "location": string,
    "equipments": string[],
    "tags": string[]
}