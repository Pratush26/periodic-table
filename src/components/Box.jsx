import React from 'react'
import { Link } from 'react-router-dom';

const Box = ({ data, onHover }) => {

    return (
        <Link
            to={`/details/${data.sign}`}
            className="relative box-before-after group p-1 text-gray-300 border-2 flex flex-col inset-shadow-sm inset-shadow-gray-400 w-full transition-all transition-discrete duration-1100 ease-in-out rounded-2xl"
            data-before={data.before}
            style={{
                gridRow: data.gridRow,
                gridColumn: data.gridColumn,
                backgroundColor: data.border, // Initial border color
                borderColor: data.border,
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = data.border; // Background takes the border color
                // Change text color conditionally
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'; // Restore background color
                if (onHover) onHover(data); // Pass data to parent
            }}
        >
            <section className="flex justify-between text-center">
                <div className="flex flex-col justify-between">
                    <h5 className='text-sm font-bold'>{data.z}</h5>

                    {/* Smoothly reveal this content */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                        <h6 className="text-[10px] opacity-0 text-sm translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                            {data.bt}
                        </h6>
                    </div>

                    <h3 className='drop-shadow-[2px_2px_2px_rgba(0,0,144,0.8)] font-bold text-xl text-white'>{data.sign}</h3>
                </div>

                <span className="flex flex-col text-sm">
                    <h5 className='text-sm font-bold'>{data.a}</h5>

                    {/* Smoothly reveal this content */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                        <h6 className="text-[10px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                            {data.st}
                        </h6>
                    </div>

                    <h5 className='text-[12px]'>{data.en}</h5>
                </span>
            </section>

            {/* Smoothly reveal this paragraph */}
            <section className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                <p className="text-center text-white text-[10px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    {data.fname}
                </p>
            </section>
        </Link>

    )
}

export default Box