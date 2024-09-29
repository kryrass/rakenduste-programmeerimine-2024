import React, { useState } from "react";
import { Button, TextField, Box, Snackbar } from "@mui/material";

interface SubmitTodoProps {
  fetchTodos: () => void;
}

const SubmitTodo: React.FC<SubmitTodoProps> = ({ fetchTodos }) => {
  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = { name, priority };

    try {
      const response = await fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setName(""); 
      setPriority(0);
      fetchTodos();
      setSnackbarMessage("Todo lisamine õnnestus!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error adding todo:", error);
      setSnackbarMessage("Todo lisamine ebaõnnestus.");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center" 
      sx={{ mt: 2, maxWidth: 300, margin: '0 auto' }} 
    >
      <TextField
        label="Todo nimi"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        margin="normal"
        fullWidth
      />
      <TextField
        label="Tähtsus"
        type="number"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
        margin="normal"
        fullWidth 
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }} 
      >
        Lisa Todo
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default SubmitTodo;
