"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzasRepositories = void 0;
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
class PizzasRepositories {
    static connect() {
        let path = (0, node_path_1.join)(__dirname, `/../database/pizzas.json`);
        let data = (0, promises_1.readFile)(path);
        return data;
    }
}
exports.PizzasRepositories = PizzasRepositories;
