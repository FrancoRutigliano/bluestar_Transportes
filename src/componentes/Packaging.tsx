import montacarga from '../assets/montacarga.svg'

export const Packaging = () => {
  return (
    <section className="h-screen flex">
        
        <div className=' w-1/2 flex justify-center items-center px-10'>
            <img src={montacarga} alt="" className='' />
        </div>
        <div className=' w-1/2 flex items-center '>
        <div className='   py-32 border-l-4 border-azul flex items-center '>
            <p className='text-azul  lg:text-3xl ml-10 mr-20'>Tenemos amplia experiencia con plastiqueras y empresas que realizan packaging industrial.</p>
        </div>
        </div>

    </section>
  )
}
