"use client ";
import { useState } from "react";

export default function Quanity() {
  const [count, setcount] = useState(0);
  const add = () => {
    if (count < 9) {
      setcount(count + 1);
    }
  };
  const sub = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  return (
    <div className="flex gap-6 font-medium text-xl">
      <button onClick={sub}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>
    </div>
  );
}
