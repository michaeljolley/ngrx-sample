import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ToDoService } from '../../services/todo.service';
import * as ToDoActions from '../actions/todo.actions';
import { ToDo } from '../../models';

@Injectable()
export class ToDoEffects {
  constructor(
    private actions$: Actions,
    private todoService: ToDoService
  ) {}

  @Effect()
  loadToDos$ = this.actions$.pipe(
    ofType(ToDoActions.ToDoActionTypes.LOAD_TODOS),
    map(
      (action: ToDoActions.LoadToDosAction) => action.payload
    ),
    mergeMap(() =>
      this.todoService.getToDos$().pipe(
        map(
          response => new ToDoActions.LoadToDosSuccessAction(response)
        ),
        catchError(err =>
          of(new ToDoActions.LoadToDosErrorAction(err))
        )
      )
    )
  );


  @Effect()
  saveToDos$ = this.actions$.pipe(
    ofType(ToDoActions.ToDoActionTypes.SAVE_TODO),
    map(
      (action: ToDoActions.LoadToDosAction) => action.payload
    ),
    mergeMap((todo: ToDo) =>
      this.todoService.saveToDo$(todo).pipe(
        map(
          response => new ToDoActions.SaveToDoSuccessAction(response)
        ),
        catchError(err =>
          of(new ToDoActions.SaveToDoErrorAction(err))
        )
      )
    )
  );

  @Effect()
  deleteToDo$ = this.actions$.pipe(
    ofType(ToDoActions.ToDoActionTypes.DELETE_TODO),
    map(
      (action: ToDoActions.DeleteToDoAction) => action.payload
    ),
    mergeMap((id: number) =>
      this.todoService.deleteToDo$(id).pipe(
        map(
          response => new ToDoActions.DeleteToDoSuccessAction(id)
        ),
        catchError(err =>
          of(new ToDoActions.DeleteToDoErrorAction(err))
        )
      )
    )
  );
}
