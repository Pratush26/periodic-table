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
      <h1 className="text-5xl text-cyan-600 text-center font-bold cookie-font">
        Periodic Table
      </h1>
      <div className="grid gap-1 grid-cols-18">
        <div className="relative p-2 border-2 border-amber-900 text-white bg-amber-900 flex flex-col inset-shadow-sm inset-shadow-gray-400 w-full rounded-2xl before:absolute before:-top-4 before:left-[10%] before:text-xs before:text-white before:content-['Group_No.'] after:absolute after:bottom-[50%] after:-left-15 after:text-xs after:text-white after:content-['Period_No.']"
          style={{
            gridRow: "1 / span 2",
            gridColumn: "7 / span 3",
          }}
        >
          <section className="flex justify-between text-center">
            <div className="flex flex-col justify-between">
              <h5 className='font-bold text-[12px]'>Atomic number</h5>
              <h6 className="text-[10px]">
                Boiling tempreture
              </h6>

              <h3 className='drop-shadow-[2px_2px_2px_rgba(0,0,144,0.8)] font-bold text-2xl'>sign</h3>
            </div>

            <span className="flex flex-col text-sm">
              <h5 className='font-bold text-[12px]'>Mass Number</h5>

              <h6 className="text-[10px]">
                Steam tempreture
              </h6>

              <h5 className='text-[12px]'>Electro-negativity</h5>
            </span>
          </section>
          <p className="text-center text-[12px]">
            Atomic name
          </p>
        </div>
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