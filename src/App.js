import logo from "./logo.svg";
import "./App.css";
import Hello, { HelloPerson } from "./Hello";
import { Header } from "./Header";
import { Helloo } from "./Helloo";
import Car from "./Car";
import Login from "./Login";

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
