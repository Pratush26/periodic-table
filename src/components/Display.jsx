import React from 'react'

const Box = ({ data }) => {

    return (
        <div
            className="relative box-before-after p-2 text-white border-2 flex flex-col inset-shadow-sm inset-shadow-gray-400 w-full transition-all duration-1100 ease-in-out rounded-2xl cursor-pointer"
            data-before={data.group}
            data-after={data.period}
            style={{
                gridRow: "1 / span 2",
                gridColumn: "4 / span 2",
                margin: data.m,
                backgroundColor: data.border,
                borderColor: data.border,
            }}
        >
            <section className="flex justify-between text-center">
                <div className="flex flex-col justify-between">
                    <h5 className='font-bold'>{data.z}</h5>
                    <h6 className="text-[12px]">
                        {data.bt}
                    </h6>

                    <h3 className='drop-shadow-[2px_2px_2px_rgba(0,0,144,0.8)] font-bold text-2xl'>{data.sign}</h3>
                </div>

                <span className="flex flex-col text-sm">
                    <h5 className='font-bold'>{data.a}</h5>

                    <h6 className="text-[12px]">
                        {data.st}
                    </h6>

                    <h5 className='text-[16px]'>{data.en}</h5>
                </span>
            </section>
            <p className="text-center">
                {data.fname}
            </p>
        </div>

    )
}

export default Box