import { TodoItem } from "./todoitem";
export class Model{
    name: string;
    items: TodoItem[];

    constructor() {
        this.name ="Arda";
        this.items = 
    [
        { aciklama:"kahvalta" ,yap: true },
        { aciklama:"spor",yap: true},
        { aciklama:"alışveriş",yap: false}
    ];
    }
}

