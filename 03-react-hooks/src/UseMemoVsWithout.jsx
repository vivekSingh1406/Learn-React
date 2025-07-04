import React, { useState, useMemo } from 'react';

function UseMemoVsWithout() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Simulate an expensive calculation
  const expensiveCalculation = (num) => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num * 2;
    }
    return result;
  };

  //This runs on every render (without useMemo)
  const calculatedWithoutMemo = expensiveCalculation(count);

  //This only runs when `count` changes (with useMemo)
  const calculatedWithMemo = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>React useMemo vs Without useMemo Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h3>Count: {count}</h3>

      <p>
        <strong>Without useMemo:</strong> {calculatedWithoutMemo}
      </p>
      <p>
        <strong>With useMemo:</strong> {calculatedWithMemo}
      </p>
    </div>
  );
}

export default UseMemoVsWithout;
