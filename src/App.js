import logo from "./logo.svg";
import "./App.css";
import Hello, { HelloPerson } from "./components/Hello";
import { Header } from "./components/Header";
import { Helloo } from "./components/Helloo";
import Car from "./components/Car";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Hello />
      <HelloPerson name={"Bui Bich Phuong là ai ???"} />
      <Header />
      <Helloo />
      <Car />
      <Login />
    </div>
  );
}

export default App;
