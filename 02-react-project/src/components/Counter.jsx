import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={buttonStyle}>Increase</button>
      <button 
        onClick={decrement} 
        style={{
          ...buttonStyle,
          backgroundColor: count === 0 ? '#ccc' : '#f44',
          cursor: count === 0 ? 'not-allowed' : 'pointer'
        }}
        disabled={count === 0}
      >
        Decrease
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '5px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
};

export default Counter;
