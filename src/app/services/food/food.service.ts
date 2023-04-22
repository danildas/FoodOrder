import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      {name: 'All', count: 14},
      {name:'FastFood', count: 4},
      {name:'Pizza', count: 2},
      {name:'Drink', count: 1},
      {name:'Lunch', count: 3},
      {name:'Fry', count: 1},
      {name:'Soup', count: 1}
    ]
  }


  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Onion Cheese Pizza',
        cookTime: '10-20',
        price: 8.50,
        favorite: true,
        origins: ['italy', 'USA'],
        star: 3,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 9.40,
        favorite: false,
        origins: ['italy', 'Canada', 'USA'],
        star: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 3,
        name: 'Chicken',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood','Lunch']
      },
      {
        id: 4,
        name: 'Cake',
        cookTime: '0',
        price: 11,
        favorite: true,
        origins: ['Canada'],
        star: 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Lunch']
      },
      {
        id: 5,
        name: 'Coffee',
        cookTime: '2-5',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['Drink', 'Lunch']
      },
      {
        id: 6,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      }
    ]
  }
}
