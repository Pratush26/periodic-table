import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../assets/Data'; 

const Details = () => {
  const { sign } = useParams();

    // --- Robust check for data being loaded correctly ---
  if (!data || !Array.isArray(data) || data.length === 0) {
    console.error('Error: Data array is not loaded correctly or is empty.');
    return (
      <main className='flex flex-col items-center justify-center h-screen p-8 bg-gray-900 text-white'>
        <h1 className='text-4xl font-bold text-red-500'>Data Not Loaded</h1>
        <p className='text-lg text-gray-300'>The periodic table data could not be loaded. Please check the `Data.jsx` file path and its content.</p>
      </main>
    );
  }

  // Find the element in the data array, making the comparison case-insensitive
  const elementData = data.find(item => item.sign && item.sign.toLowerCase() === sign.toLowerCase());

  if (!elementData) {
    // Handle case where element is not found AFTER data is confirmed loaded
    return (
      <main className='flex flex-col items-center justify-center h-screen p-8 bg-gray-900 text-white'>
        <h1 className='text-4xl font-bold text-red-500'>Element Not Found</h1>
        <p className='text-lg text-gray-300'>No data available for the element: "{sign}"</p>
        <p className='text-md text-gray-400 mt-2'>Please ensure the element symbol in the URL is correct (e.g., /details/Mg or /details/H).</p>
      </main>
    );
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-[90vh] p-8'>
      <section className='flex flex-col items-center justify-center p-8 rounded-lg shadow-lg'>
        <h1 className='text-5xl font-extrabold text-amber-500 mb-4'>{elementData.fname} ({elementData.sign})</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-lg'>
          <p><strong>Atomic Number (Z):</strong> {elementData.z}</p>
          <p><strong>Atomic Mass (A):</strong> {elementData.abA}</p>
          <p><strong>Period:</strong> {elementData.period}</p>
          <p><strong>Group:</strong> {elementData.group}</p>
          <p><strong>Block:</strong> {elementData.block} block</p>
          <p><strong>Type:</strong> {elementData.type}</p>
          <p><strong>Oxidation Numbers:</strong> {elementData.oxiNo}</p>
          <p><strong>Electron Configuration:</strong> {elementData.ec}</p>
          <p><strong>Boiling Point (K):</strong> {elementData.bt}</p>
          <p><strong>Melting Point (K):</strong> {elementData.st}</p>
          <p><strong>Electronegativity (Pauling):</strong> {elementData.en}</p>
        </div>
      </section>
    </main>
  );
}

export default Details;