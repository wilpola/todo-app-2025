import { ITodo } from "./Basic";

export const addBasicTodo = (
  newTodo: string,
  setNewTodo: React.Dispatch<React.SetStateAction<string>>,
  date: Date | undefined,
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
  todos: ITodo[],
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
) => {
  if (newTodo === "") {
    return;
  }
  const newTodoObj: ITodo = {
    id: todos.length + 1,
    title: newTodo,
    description: "",
    completed: false,
    due: date,
  };

  setTodos([...todos, newTodoObj]);
  setNewTodo("");
  setDate(undefined);
};

export const handleCompletion = (
  id: number,
  todos: ITodo[],
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  setTodos(updatedTodos);
};
