import React, { useEffect } from 'react';

const Booking = () => {
  useEffect(() => {
    document.title = "Booking"; // Set the page title
  }, []);
  return (
    <div>
      <h1>Book a date</h1>
    </div>
  );
};



export default Booking;
