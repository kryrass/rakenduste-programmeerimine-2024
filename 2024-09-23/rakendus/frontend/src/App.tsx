import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors"; 
import { Divider } from "@mui/material";
import "./App.css";
import Cats from "./components/Cats";
import Todos from "./components/Todos";


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500], 
    },
    secondary: {
      main: '#dc004e', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Cats />
        <Divider sx={{ my: 4 }} />
        <Todos />
      </>
    </ThemeProvider>
  );
}

export default App;
