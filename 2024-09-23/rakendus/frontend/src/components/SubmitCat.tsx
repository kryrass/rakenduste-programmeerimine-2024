import { Box, Button, TextField, Snackbar } from "@mui/material";
import React, { useState } from "react";

type SubmitCatProps = {
  fetchCats: () => void;
};

const SubmitCat = ({ fetchCats }: SubmitCatProps) => {
  const [name, setName] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const submitCat = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });

      if (response.ok) {
        setSnackbarMessage("Kassi lisamine õnnestus!");
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage("Kassi lisamine ebaõnnestus.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.warn(error);
      setSnackbarMessage("Midagi läks valesti");
      setSnackbarOpen(true);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    submitCat();
    setTimeout(fetchCats, 100);
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
        label="Sisesta kassi nimi"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        margin="normal"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Lisa kass
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

export default SubmitCat;
