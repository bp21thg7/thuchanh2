import { useState } from "react";
function Login() {
  const [inpUsername, setInpUsername] = useState("");
  const [inpPassword, setInpPassword] = useState("");
  const [inpIsAdmin, setInpIsAdmin] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Username: " + inpUsername);
    console.log("Password: " + inpPassword);
    console.log("IsAdmin: " + inpIsAdmin);
  };
  return (
    <form action="">
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={inpUsername}
        onInput={(e) => {
          setInpUsername(e.target.value);
        }}
      />
      <label htmlFor="">Password</label>
      <input
        type="text"
        value={inpPassword}
        onInput={(e) => {
          setInpPassword(e.target.value);
        }}
      />
      <input
        type="checkbox"
        value={inpIsAdmin}
        onInput={(e) => {
          setInpIsAdmin(!inpIsAdmin);
        }}
      />
      <label htmlFor="">Is Admin?</label>
      <button onClick={handleLogin}>Dang nhap</button>
    </form>
  );
}

export default Login;
