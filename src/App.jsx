import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Vux Duc Minh HELLOW WORLD</div>
      <Button variant="contained">Hello world</Button>
    </>
  );
}

export default App;
