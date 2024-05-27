import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('');

  //////
  // Receiving Data from Child:
  //   handleData is a function defined in the parent component. It takes a parameter (childData) and updates the parent's data state with it
  const handleData = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <h1>Parent </h1>
      <ChildComponent onSubmit={handleData} />
      <p>Data from Child: {data}</p>
    </div>
  );
};
export default ParentComponent;
