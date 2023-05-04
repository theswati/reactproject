import React, { useState } from 'react';

function App() {
  const items = [
    { name: 'Apple', value: 20 },
  { name: 'Banana', value: 10 },
  { name: 'Nutella', value: 30},
  { name: 'Razor', value: 5 },
  { name: 'Corn Flakes', value: 15 },
  { name: 'Soundbar', value:50},
  { name: 'iPhone', value: 80 },
  ];

  // State for storing the entered value and the current item
  const [enteredValue, setEnteredValue] = useState('');
  const [currentItem, setCurrentItem] = useState(items[0]);

  // Event handler for updating the entered value
  const handleValueChange = (event) => {
    setEnteredValue(event.target.value);
  };
    

  return (
    <div>
      <input type="number" value={enteredValue} onChange={handleValueChange} />
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Value</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  );
}

export default App;
