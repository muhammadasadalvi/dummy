import React, { useEffect } from 'react';

const catalogue = () => {
  useEffect(() => {
    document.title = "catalogue"; // Set the page title
  }, []);
  return (
    <div>
      <h1>catalogue</h1>
    </div>
  );
};



export default catalogue;
