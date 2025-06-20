import React from 'react'
import mendeleev from '../../public/mendeleev.png'

const Home = () => {
  return (
    <main className='flex items-center justify-center h-screen p-8'>
      <section className='flex flex-col items-center justify-center'>
      <img src={mendeleev} alt="Dmitri Mendeleev" className='w-1/2 h-1/2 object-contain rounded-lg bg-amber-50' />
      <p className='mt-2'>Russian chemist (1834–1907)</p>
      </section>
      <section className='text-center'>
      <h1 className='text-4xl font-bold'>Dmitri Mendeleev</h1>
      <p className='text-lg'>Dmitri Mendeleev was a Russian chemist who is best known for his work on the periodic table of elements. He is often referred to as the "Father of the Periodic Table" because of his work in organizing the elements in a way that shows their chemical and physical properties.</p>
      <p className='text-lg'>Mendeleev's periodic table was based on the idea that the elements could be grouped together based on their atomic weight and chemical properties. He was able to predict the properties of several elements that had not yet been discovered, and his work has had a significant impact on the field of chemistry.</p>
      <p className='text-lg'>Mendeleev was born in the Russian Empire in 1834 and died in 1907. He was a professor of chemistry at the University of St. Petersburg and was a member of the Russian Academy of Sciences.</p>
      <p className='text-lg'>Mendeleev's work on the periodic table has had a significant impact on the field of chemistry. It has helped to organize the elements in a way that shows their chemical and physical properties, and it has helped to predict the properties of several elements that had not yet been discovered.</p>
      <p className='text-lg'>Mendeleev's work on the periodic table is still used today, and it is a fundamental tool for chemists and physicists.</p>
      </section>
    </main>
  )
}

export default Home