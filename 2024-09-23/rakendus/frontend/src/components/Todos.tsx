import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTodo from "./SubmitTodo";

type Todo = {
  id: string;  
  name: string;
  priority: number;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, settodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/todos");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      settodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);  
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    
<Box>
<Typography variant="h3">Todos</Typography>
<List>
  {todos.map((todo) => (
    <ListItem key={todo.id}>{JSON.stringify(todo)}</ListItem>
  ))}
</List>
<SubmitTodo fetchTodos={fetchTodos} />
</Box>


  );
};

export default Todos;
