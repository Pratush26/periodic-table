import { useState } from 'react'
import Box from '../components/Box'
import { data } from '../assets/Data';
import Display from '../components/Display';

function Table() {

  const [hoveredData, setHoveredData] = useState(null);

  const sendData = (data) => {
    setHoveredData(data);
  };


  return (
      <main className='min-h-screen'>
        <h1 className="text-5xl text-cyan-600 text-center font-bold damion-font">
          Periodic Table
        </h1>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', }}>
        {hoveredData && <Display data={hoveredData} />}
          {data.map((item, index) => (
            <Box data={item} onHover={sendData} key={index} />
          ))}
         </div>
      </main>
  )
}

export default Table
//responsive width 950px 