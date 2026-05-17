import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Sayaç: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Arttır
      </button>
    </div>
  );
}

export default Counter;
