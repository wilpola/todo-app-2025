import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

// Import functions
import { addBasicTodo, handleCompletion } from "./basic.functions";

// Interface for the todo object
export interface ITodo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  due: Date | undefined;
}

// Code for the main BasicTodo component
function BasicTodo() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [date, setDate] = useState<Date>();

  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="grid grid-rows-[70px_1fr_100px] h-screen">
        <Tabs defaultValue="all" className="row-start-2 auto-center">
          <TabsList className="grid w-[300px] grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="todo">Todo</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="">
            <div className="flex flex-col gap-2 ">
              {todos &&
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center leading-1.5 gap-2 ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    <Checkbox
                      id={`todo-${todo.id}`}
                      className=""
                      checked={todo.completed}
                      onCheckedChange={() =>
                        handleCompletion(todo.id, todos, setTodos)
                      }
                    />
                    <Label
                      htmlFor={`todo-${todo.id}`}
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {todo.title[0].toUpperCase() + todo.title.slice(1)}
                      {/* {todo.completed && <span className="text-xs text-gray-500"> - Completed</span>} */}
                      {todo.due !== undefined && (
                        <span className="text-xs text-gray-500">
                          {" "}
                          - {new Date(todo.due).toDateString()}
                        </span>
                      )}
                    </Label>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="todo">
            <div className="flex flex-col gap-2 ">
              {todos.length > 0 ? (
                todos
                  .filter((todo) => !todo.completed)
                  .map((todo) => (
                    <div
                      key={todo.id}
                      className={`flex items-center leading-1.5 gap-2 `}
                    >
                      <Checkbox
                        id={`todo-${todo.id}`}
                        className=""
                        checked={todo.completed}
                        onCheckedChange={() =>
                          handleCompletion(todo.id, todos, setTodos)
                        }
                      />
                      <Label
                        htmlFor={`todo-${todo.id}`}
                        className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {todo.title[0].toUpperCase() + todo.title.slice(1)}
                        {todo.due !== undefined && (
                          <span className="text-xs text-gray-500">
                            {" "}
                            - {new Date(todo.due).toDateString()}
                          </span>
                        )}
                      </Label>
                    </div>
                  ))
              ) : (
                <div className=" text-gray-500">Add a task to get started</div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="completed">
            <div className="flex flex-col gap-2 ">
              {todos.length > 0 ? (
                todos
                  .filter((todo) => todo.completed)
                  .map((todo) => (
                    <div
                      key={todo.id}
                      className={`flex items-center leading-1.5 gap-2`}
                    >
                      <Checkbox
                        id={`todo-${todo.id}`}
                        className=""
                        checked={todo.completed}
                        onCheckedChange={() =>
                          handleCompletion(todo.id, todos, setTodos)
                        }
                      />
                      <Label
                        htmlFor={`todo-${todo.id}`}
                        className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {todo.title[0].toUpperCase() + todo.title.slice(1)}
                        {/* {todo.completed && <span className="text-xs text-gray-500"> - Completed</span>} */}
                        {todo.due !== undefined && (
                          <span className="text-xs text-gray-500">
                            {" "}
                            - {new Date(todo.due).toDateString()}
                          </span>
                        )}
                      </Label>
                    </div>
                  ))
              ) : (
                <div className=" text-gray-500">No completed todos</div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        <div className="row-start-3 flex items-center">
          <form
            action="submit"
            className="grid grid-cols-[36px_auto_80px] gap-2 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className={cn(
                    "font-normal",
                    !date && "text-muted-foreground",
                    date && "border-green-500 border text-green-500"
                  )}
                >
                  <CalendarIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input
              className=""
              value={newTodo}
              placeholder="Add a new todo"
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button
              variant={"default"}
              className=""
              onClick={() =>
                addBasicTodo(
                  newTodo,
                  setNewTodo,
                  date,
                  setDate,
                  todos,
                  setTodos
                )
              }
            >
              Add
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BasicTodo;
