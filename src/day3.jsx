import { useState } from "react";

function Day3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Day 3</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Day3;