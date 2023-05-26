import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getShoppingList } from './store/shopping-list.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ingredients?: any[] = [
  //   { name: 'Milk', quantity: 4 },
  //   { name: 'Tomatoes', quantity: 8 },
  // ];

  constructor(private store: Store) {}

  ingredients$ = this.store.pipe(
    select(getShoppingList)
  )
}
