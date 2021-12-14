import "./App.css";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { UserContextProvider } from "./context/user";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Navbar />
        <CreatePost/>
        <Feed/>
      </div>
    </UserContextProvider>
  );
}

export default App;
