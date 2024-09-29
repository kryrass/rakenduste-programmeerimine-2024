import { Divider } from "@mui/material";
import "./App.css";
import Cats from "./components/Cats";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Cats />
      <Divider sx={{ my: 4 }} /> 
      <Todos />
    </>
  );
}

export default App;