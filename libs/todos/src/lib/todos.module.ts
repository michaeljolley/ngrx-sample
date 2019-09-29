import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { fromToDos, ToDoEffects, toDoStateFeatureKey } from './+state';
import { ToDoComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      toDoStateFeatureKey,
      fromToDos.todosReducer
    ),
    EffectsModule.forFeature([
      ToDoEffects
    ]),
    HttpClientModule
  ],
  declarations: [
    ToDoComponent
  ],
  exports: [
    ToDoComponent,

    HttpClientModule
  ]
})
export class TodosModule {}
