import { Action } from '@ngrx/store';
import { ToDo } from '../../models';

export interface IToDoActions {
  LOAD_TODOS: string;
  LOAD_TODOS_SUCCESS: string;
  LOAD_TODOS_ERROR: string;

  SAVE_TODO: string,
  SAVE_TODO_SUCCESS: string;
  SAVE_TODO_ERROR: string;

  DELETE_TODO: string;
  DELETE_TODO_SUCCESS: string;
  DELETE_TODO_ERROR: string;
};

export const ToDoActionTypes: IToDoActions = {
  LOAD_TODOS: '[ToDo] Load ToDos',
  LOAD_TODOS_SUCCESS: '[ToDo] Load ToDos Success',
  LOAD_TODOS_ERROR: '[ToDo] Load ToDos Error',
  SAVE_TODO: '[ToDo] Save ToDo',
  SAVE_TODO_SUCCESS: '[ToDo] Save ToDo Success',
  SAVE_TODO_ERROR: '[ToDo] Save ToDo Error',
  DELETE_TODO: '[ToDo] Delete ToDo',
  DELETE_TODO_SUCCESS: '[ToDo] Delete ToDo Success',
  DELETE_TODO_ERROR: '[ToDo] Delete ToDo Error'
};

export class LoadToDosAction implements Action {
  readonly type = ToDoActionTypes.LOAD_TODOS;
  constructor(public payload: any) {}
}

export class LoadToDosSuccessAction implements Action {
  readonly type = ToDoActionTypes.LOAD_TODOS_SUCCESS;
  constructor(public payload: ToDo[]) {}
}

export class LoadToDosErrorAction implements Action {
  readonly type = ToDoActionTypes.LOAD_TODOS_ERROR;
  constructor(public payload: any) {}
}

export class SaveToDoAction implements Action {
  readonly type = ToDoActionTypes.SAVE_TODO;
  constructor(public payload: ToDo) {}
}

export class SaveToDoSuccessAction implements Action {
  readonly type = ToDoActionTypes.SAVE_TODO_SUCCESS;
  constructor(public payload: ToDo) {}
}

export class SaveToDoErrorAction implements Action {
  readonly type = ToDoActionTypes.SAVE_TODO_ERROR;
  constructor(public payload: any) {}
}

export class DeleteToDoAction implements Action {
  readonly type = ToDoActionTypes.DELETE_TODO;
  constructor(public payload: number) {}
}

export class DeleteToDoSuccessAction implements Action {
  readonly type = ToDoActionTypes.DELETE_TODO_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteToDoErrorAction implements Action {
  readonly type = ToDoActionTypes.DELETE_TODO_ERROR;
  constructor(public payload: any) {}
}

export type Actions =
  | LoadToDosAction
  | LoadToDosSuccessAction
  | LoadToDosErrorAction
  | SaveToDoAction
  | SaveToDoSuccessAction
  | SaveToDoErrorAction
  | DeleteToDoAction
  | DeleteToDoSuccessAction
  | DeleteToDoErrorAction;
