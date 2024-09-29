import { Box, List, ListItem, Typography, Button } from "@mui/material";
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

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:8080/todos/${id}`, {
        method: 'DELETE',
      });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdate = async (todo: Todo) => {
    if (!todo) {
        console.error("Todo is undefined");
        return;
    }
    

    const newName = prompt("Uus nimi:", todo.name);
    const newPriority = prompt("Uus tähtsus:", todo.priority ? todo.priority.toString() : "0");
    
    if (newName && newPriority) {
        try {
            const response = await fetch(`http://localhost:8080/todos`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: todo.id,
                    name: newName,
                    priority: parseInt(newPriority, 10),
                }),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const updatedTodo = await response.json(); 
            
            fetchTodos();
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    }
};

  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center">Todos</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} sx={{ flexDirection: 'column', mb: 2 }}>
            <Typography variant="body1"><strong>ID:</strong> {todo.id}</Typography>
            <Typography variant="body1"><strong>Nimi:</strong> {todo.name}</Typography>
            <Typography variant="body1"><strong>Tähtsus:</strong> {todo.priority}</Typography>
            <Typography variant="body1">
              <strong>Loodud:</strong> {new Date(todo.createdAt).toLocaleString()}
            </Typography>
            <Typography variant="body1">
              <strong>Uuendatud:</strong> {todo.updatedAt ? new Date(todo.updatedAt).toLocaleString() : "Pole uuendatud"}
            </Typography>
            <Typography variant="body1"><strong>Kusutatud:</strong> {todo.deleted ? "Jah" : "Ei"}</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Button variant="contained" color="primary" onClick={() => handleUpdate(todo)}>Muuda</Button>
              <Button variant="outlined" color="secondary" onClick={() => handleDelete(todo.id)}>Kustuta</Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <SubmitTodo fetchTodos={fetchTodos} />
    </Box>
  );
};

export default Todos;
