import { Box, List, ListItem, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCats(data);
    } catch (error) {
      console.error("Error fetching cats:", error);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:8080/cats/${id}`, {
        method: 'DELETE',
      });
      fetchCats();
    } catch (error) {
      console.error("Error deleting cat:", error);
    }
  };

  const handleUpdate = async (cat: Cat) => {
    const newName = prompt("Uus nimi:", cat.name);

    if (newName) {
      try {
        const response = await fetch(`http://localhost:8080/cats`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: cat.id,
            name: newName,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        fetchCats();
      } catch (error) {
        console.error("Error updating cat:", error);
      }
    }
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center">Kassid</Typography>
      <List>
        {cats.map((cat) => (
          <ListItem key={cat.id} sx={{ flexDirection: 'column', mb: 2 }}>
            <Typography variant="body1"><strong>ID:</strong> {cat.id}</Typography>
            <Typography variant="body1"><strong>Nimi:</strong> {cat.name}</Typography>
            <Typography variant="body1">
              <strong>Loodud:</strong> {new Date(cat.createdAt).toLocaleString()}
            </Typography>
            <Typography variant="body1">
              <strong>Uuendatud:</strong> {cat.updatedAt ? new Date(cat.updatedAt).toLocaleString() : "Pole uuendatud"}
            </Typography>
            <Typography variant="body1"><strong>Kusutatud:</strong> {cat.deleted ? "Jah" : "Ei"}</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Button variant="contained" color="primary" onClick={() => handleUpdate(cat)}>Muuda</Button>
              <Button variant="outlined" color="secondary" onClick={() => handleDelete(cat.id)}>Kustuta</Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
