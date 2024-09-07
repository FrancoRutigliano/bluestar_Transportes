import camionero from '../assets/camionero.svg'
export const Nosotros = () => {
  return (
    <section className='bg-azul h-screen'>
        <h1 className='text-center text-white text-5xl p-10 font-medium'>Quiénes Somos</h1>
    <div className=" bg-sky-200 flex">
        <div className=' w-1/2 flex justify-center items-center px-16 bg-red-200'>
            <img src={camionero} alt="camionero" />
        </div>
        <div className='w-1/2 bg-lime-200'>

        </div>
    </div>
    </section>
  )
}
