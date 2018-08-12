import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onReset, onIncrement, onDelete }) => (
  <div>
    <button onClick={onReset} className="btn btn-primary btn-sm">
      Reset
    </button>
    {counters.map(counter => (
      <Counter
        key={counter.id}
        counter={counter}
        onIncrement={onIncrement}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default Counters;
