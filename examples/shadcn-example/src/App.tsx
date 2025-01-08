import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Label } from "./components/ui/label";

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  return (
    <main id="root">
      <p>Count: {count}</p>

      <div>
        <Label htmlFor="increment">Increment amount:</Label>
        <Select
          name="increment"
          value={String(increment)}
          onValueChange={(v) => setIncrement(Number(v))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select increment..." />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3].map((i) => (
              <SelectItem key={i} value={i.toString()}>
                {i}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button onClick={() => setCount((c) => c + increment)}>Increment</Button>
    </main>
  );
}

export default App;
