// frontend/src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [pets, setPets] = useState([]); // State to store pet listings

  // Fetch pet listings from the backend on component load
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/petsDisplay'); // Update endpoint
        setPets(response.data); // Set the response data to the state
      } catch (error) {
        console.error('Failed to fetch pet listings:', error);
      }
    };

    fetchPets(); // Call the fetch function
  }, []);

  return (
    <div>
      <h1>Available Pets for Adoption</h1>
      <div>
        {pets.length > 0 ? (
          pets.map((pet) => (
            <div key={pet._id} style={{ margin: '20px', border: '1px solid #ccc', padding: '20px' }}>
              <img
                src={'http://localhost:3001/'+pet.image}
                alt={pet.name}
                width="200"
                style={{ marginBottom: '10px' }}
              />
              <h3>{pet.name}</h3>
              <p>Age: {pet.age}</p>
              <p>Breed: {pet.breed}</p>
              <p>Description: {pet.description}</p>
            </div>
          ))
        ) : (
          <p>No pets available for adoption</p>
        )}
      </div>
    </div>
  );
};

export default Home;
