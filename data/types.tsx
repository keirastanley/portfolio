export type projectObjType = {
    name: string;
    description: string;
    collaborators: {name: string, link: string}[];
    images: string[];
    link: string;
    repo: string;
    todos: string[],
    tags: {topic: string, info: {text: string, images: string[]}}[]
}

export type projectArrType = projectObjType[]