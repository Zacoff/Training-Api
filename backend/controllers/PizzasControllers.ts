import { Response, Request } from 'express'
import { ListServices } from '../services/ListServices'

class PizzasConstrollers {
    static async listPizzas (req:Request, res:Response) {
        let data : Object = await ListServices.listAll();
        res.send(data)
        res.end()
    }
    static async listOne (req:Request, res:Response) {

    }
}

export { PizzasConstrollers }