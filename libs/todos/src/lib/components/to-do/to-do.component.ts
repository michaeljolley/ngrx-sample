import { Component, OnInit, OnDestroy } from '@angular/core';
import { IToDoState, ToDoActions } from '../../+state';
import { Store, select } from '@ngrx/store';

import { ToDo } from '../../models';
import { getToDos } from '../../+state';
import { takeWhile } from 'rxjs/operators';
import { TodosModule } from '../../todos.module';

@Component({
  selector: 'ngrxme-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit, OnDestroy {

  constructor(
    private _store: Store<IToDoState>
  ) { }

  todos: ToDo[];
  isActive: boolean = true;

  ngOnInit() {

    this._store.pipe(
        select(getToDos),
        takeWhile(() => this.isActive))
      .subscribe(s => {
        this.todos = s
      });

    this._store.dispatch(new ToDoActions.LoadToDosAction(null));
  }

  completeToDo(todo: ToDo) {
    todo.completed = true;
    this.saveToDo(todo);
  }

  saveToDo(todo: ToDo) {
    this._store.dispatch(new ToDoActions.SaveToDoAction(todo));
  }

  deleteToDo(id: number) {
    this._store.dispatch(new ToDoActions.DeleteToDoAction(id));
  }

  ngOnDestroy() {
    this.isActive = false;
  }

}
