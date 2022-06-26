import { PizzasRepositories } from "../repositories/PizzasRepository";

class ListServices {
    static async listAll () {
        let result : Object = await PizzasRepositories.connect();
        return result
    }
}

export { ListServices }