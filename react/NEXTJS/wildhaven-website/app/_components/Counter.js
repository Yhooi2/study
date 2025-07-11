"use client";

import { useState } from "react";

function Counter({ users }) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>There are {users.length}</p>
      <button onClick={() => setCounter((count) => ++count)}>{counter}</button>
    </div>
  );
}

export default Counter;
