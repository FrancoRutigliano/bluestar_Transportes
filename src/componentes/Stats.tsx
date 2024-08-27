import React from 'react'

export const Stats = () => {
  return (
    <div className='h-80 bg-azul w-full flex justify-center items-center'>

      <div className="flex flex-col items-center w-1/8  p-2">

        <div className="flex items-center justify-center w-44 h-44 rounded-full border-2 border-white text-white text-4xl font-bold">
          +5000
        </div>
        <p className="mt-4 text-lg font-medium text-white text-center">VIAJES <br /> REALIZADOS</p>
      </div>


      <div className="flex flex-col items-center w-1/8  p-2 mx-20">

        <div className="flex items-center justify-center w-44 h-44 rounded-full border-2 border-white text-white text-4xl font-bold">
          +50.000
        </div>
        <p className="mt-4 text-lg font-medium text-white text-center">PAQUETES <br /> ENVIADOS</p>
      </div>



      <div className="flex flex-col items-center w-1/8  p-2">

        <div className="flex items-center justify-center w-44 h-44 rounded-full border-2 border-white text-white text-4xl font-bold">
          +25
        </div>
        <p className="mt-4 text-lg font-medium text-white text-center">AÑOS DE<br /> EXPERIENCIA</p>
      </div>



    </div>
  )
}
