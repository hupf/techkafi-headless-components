import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <output>Count: {count}</output>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </main>
  );
}

export default App;
