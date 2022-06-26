"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const PizzasControllers_1 = require("../controllers/PizzasControllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/listPizzas', PizzasControllers_1.PizzasConstrollers.listPizzas);
