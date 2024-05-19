import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [classSection, setClassSection] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      name,
      registrationNumber,
      classSection
    };
    
    try {
      const response = await fetch('/api/saveUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      if (response.ok) {
        console.log('User data saved successfully!');
        // Reset form fields
        setName('');
        setRegistrationNumber('');
        setClassSection('');
      } else {
        console.error('Failed to save user data.');
      }
    } catch (error) {
      console.error('Error occurred while saving user data:', error);
    }
  };

  return (
    <div>
      <h1>Collect User Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Registration Number:
          <input type="text" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Class/Section:
          <input type="text" value={classSection} onChange={(e) => setClassSection(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
