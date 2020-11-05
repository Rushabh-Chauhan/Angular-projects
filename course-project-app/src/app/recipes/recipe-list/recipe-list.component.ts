import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'a Test Recipe',
      'This is simply a test',
      'https://thespicyapron.com/wp-content/uploads/2017/06/Easy-Camping-Meals-Pasta-with-Fork.jpg'
    ),
    new Recipe(
      'Secoung Test Recipe',
      'This is simply the secound test',
      'https://thespicyapron.com/wp-content/uploads/2017/06/Easy-Camping-Meals-Pasta-with-Fork.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
