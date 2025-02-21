import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button
        className="counter__button"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        <Minus size={20} />
      </button>

      <span className="counter__count">{count}</span>

      <button className="counter__button" onClick={() => setCount(count + 1)}>
        <Plus size={20} />
      </button>
    </div>
  );
};

export default Counter;
