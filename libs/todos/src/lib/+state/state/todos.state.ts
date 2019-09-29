import { ToDo } from '../../models';

export const toDoStateFeatureKey = 'toDoState';

export interface IToDoState {
  todos: ToDo[]
}
