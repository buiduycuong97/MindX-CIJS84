import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  if (count == 5) {
    setCount(0);
  }
  useEffect(() => {
    const a = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("..........");
    }, 1000);
    // return () => console.log(count);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <button>Click</button>
    </div>
  );
};

export default Counter;
