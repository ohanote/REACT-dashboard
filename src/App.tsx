import Aside from "./Components/Aside";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="grid grid-flow-col lg:grid-cols-[200px_1fr] grid-cols-1 h-full">
      <Aside />
      <Dashboard />
    </div>
  );
}

export default App;
