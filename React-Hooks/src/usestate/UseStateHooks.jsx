import React, { useState } from 'react';

function UseStateHooks() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);

  // Update step value from input
  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Step Counter App</h2>

      <h3>Count: {count}</h3>

      <button onClick={handleDecrement}>➖ Decrement</button>
      <button onClick={handleIncrement}>➕ Increment</button>

      <br /><br />

      <label>
        Set Step Value:&nbsp;
        <input type="number" value={step} onChange={handleStepChange} />
      </label>
      
    </div>
  );
}

export default UseStateHooks;
