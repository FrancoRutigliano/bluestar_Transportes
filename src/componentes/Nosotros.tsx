import camionero from '../assets/camionero.svg'
export const Nosotros = () => {
  return (
    <section className='bg-azul h-screen'>
        <h1 className='text-center text-white text-5xl p-12 font-medium'>Quiénes Somos</h1>
    <div className=" flex">
        <div className=' w-1/2 flex justify-center items-center px-12'>
            <img src={camionero} alt="camionero" />
        </div>
        <div className='w-1/2 flex flex-col justify-between px-12 text-white'>
            <div>
                <h2 className='text-3xl font-medium pt-2'>Misión</h2>
                <p className='text-xl pt-3'>Nos especializamos en el transporte de mercadería de cargas generales y brindamos soluciones de logística y distribución de mercaderías.</p>
            </div>
            <div>
                <h2 className='text-3xl font-medium'>Visión</h2>
                <p className='text-xl pt-3'>Seguir afianzándonos en el mercado local para poder aumentar nuestra estructura a fin de brindar un mejor servicio.</p>
            </div>
            <div className='mb-4'>
                <h2 className='text-3xl font-medium'>Valores</h2>
                <p className='text-xl pt-3'>Blue Star entiende que la base de todo progreso es la actitud con el trabajo.</p>
            </div>
        </div>
    </div>
    </section>
  )
}
