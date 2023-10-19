import "./App.css";
// import { Application } from "./components/application";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={["java", "python"]} />
    </div>
  );
}

export default App;
