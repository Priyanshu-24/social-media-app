import "./App.css";
import { UserContextProvider } from "./context/user";
import RouteSwitch from "./RouteSwitch";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <RouteSwitch/>
      </div>
    </UserContextProvider>
  );
}

export default App;
