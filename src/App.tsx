import "./App.css";
import { Application } from "./components/application";
import { MuiMode } from "./components/mui/mui-mode";
import { AppProviders } from "./components/providers/app-providers";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        {/* <Application />
        <Skills skills={["java", "python"]} /> */}
      </div>
    </AppProviders>
  );
}

export default App;
