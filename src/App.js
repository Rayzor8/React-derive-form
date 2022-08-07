import "./App.css";
import FormOne from "./components/Form/FormOne";
import FormTwo from "./components/Form/FormTwo";
import { GlobalStyled } from "./style/globalStyled";

function App() {
  return (
    <GlobalStyled className="App">
      <FormOne/>
      <br/>
      <FormTwo/>
    </GlobalStyled>
  );
}

export default App;
