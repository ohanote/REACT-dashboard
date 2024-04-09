import Aside from "./Components/Aside";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="grid grid-flow-col grid-cols-[200px_1fr] h-full">
      <Aside />
      <Dashboard />
    </div>
  );
}

export default App;
