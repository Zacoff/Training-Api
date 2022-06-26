import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
export class PizzasRepositories {
   static connect () { 
    let path = join(__dirname,`/../database/pizzas.json`);
    let data = readFile(path);
    return data;
   }
}