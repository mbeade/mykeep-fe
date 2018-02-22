/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Todo {
  _id?: string;
  todo: string;
  isDone: boolean;
}

interface TodoList {
  _id?: string;
  listName: string;
  isComplete: boolean;
  todos: Todo[];
  isImportant: boolean;
}