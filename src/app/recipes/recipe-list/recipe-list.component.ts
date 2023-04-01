import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUAtV4MGrlgRCAUqB7X3ARtN-Z9rdZDoxiA&usqp=CAU'),
    new Recipe('Adobo', 'A Filipino recipe', 'https://christieathome.com/wp-content/uploads/2020/09/Chicken-Adobo-6.jpg')
  ];

  constructor(){}

  ngOnInit() {
    
  }

}
