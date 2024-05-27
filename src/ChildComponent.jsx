import React, { useState } from 'react';

const ChildComponent = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //   user clicks the "Submit" button.
  // handleSubmit in ChildComponent is called, which in turn calls onSubmit(inputValue).
  // onSubmit is handleData from ParentComponent, so handleData("Hello") is called.
  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter some text"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ChildComponent;
