import { Router } from 'express'
import { PizzasConstrollers } from '../controllers/PizzasControllers';

const router = Router();

router.get('/listPizzas', PizzasConstrollers.listPizzas)

export {router}