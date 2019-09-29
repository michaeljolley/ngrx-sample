
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { toDoStateFeatureKey, IToDoState } from '../state/todos.state';


const getToDoState = createFeatureSelector<
  IToDoState
  >(toDoStateFeatureKey);


export const getToDos = createSelector(
  getToDoState,
  s => s.todos
);

