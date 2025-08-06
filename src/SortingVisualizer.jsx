import React, { useState } from 'react';

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  const generateArray = () => {
    const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setArray(arr);
  };

  const bubbleSort = async () => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
    }
  };

  return (
    <div>
      <button onClick={generateArray}>Generate Array</button>
      <button onClick={bubbleSort} disabled={array.length === 0}>Bubble Sort</button>
      <div className="bars">
        {array.map((val, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${val * 3}px` }}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortingVisualizer;
