
import { IToDoState } from '../state/todos.state';
import * as ToDoActions from '../actions/todo.actions';
import { ToDo } from '../../models';

const intialToDoState: IToDoState = {
  todos: []
};

export function todosReducer(
  state: IToDoState = intialToDoState,
  action: ToDoActions.Actions
) {
  switch (action.type) {
    case ToDoActions.ToDoActionTypes.LOAD_TODOS_SUCCESS:
      return {...state, todos: action.payload}

    case ToDoActions.ToDoActionTypes.SAVE_TODO_SUCCESS:
      let existingToDo: ToDo = state.todos.find(f => f.id === action.payload.id);
      if (existingToDo) {
        const todos = state.todos.map(f => {
          if (f.id === action.payload.id) {
            f.completed = action.payload.completed;
          }
          return f;
        });
        return {...state, todos: todos};
      } else {
        return {...state, todos: state.todos.push(action.payload)};
      }

    case ToDoActions.ToDoActionTypes.DELETE_TODO_SUCCESS:
      return {...state, todos: state.todos.filter(f => f.id !== action.payload)};

    default:
      return state;
  }
}
