import { useState } from "react";
import "./App.css";

import Button from "@mui/material/Button";
import { StyleButton } from "./components/sub-components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Hello, World!</h1>
        <Button
          variant="contained"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          MUI Button
        </Button>

        {/* Cuttom */}
        <StyleButton variant="contained">MUI Button</StyleButton>
      </div>
    </>
  );
}

export default App;
