import './App.css';
import React, { useState } from 'react'
import Dropdown from './Dropdown';

const App = () => {

  const options = [
    {id:1, label: 'Fruit', value: 'fruit' },
    {id:2, label: 'Vegetable', value: 'vegetable' },
    {id:3, label: 'Meat', value: 'meat' },
    {id:4, label: 'Bear', value: 'bear' },
  ];

  const [value, setValue] = useState('fruit');

  const handleChange = (e) => {
    setValue(e.target.value);
  //  console.log(e.target.value)
  };
  return (
    <>
      <Dropdown
        label="What do we eat?"
        options={options}
        value={value}
        onChange={handleChange}
      />
      <p>We Eat {value}!</p>
    </>
  );
};
export default App;
