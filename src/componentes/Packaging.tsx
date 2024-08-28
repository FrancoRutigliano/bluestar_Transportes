import paqueteria from '../assets/paqueteria.jpg'

export const Packaging = () => {
  return (
    <section className="h-screen bg-sky-200 flex">
        
        <div className='bg-red-200 w-1/2 flex justify-center items-center px-10'>
            <img src={paqueteria} alt="" className='' />
        </div>
        <div className='bg-sky-500 w-1/2 flex items-center '>
        <div className='bg-green-200 h-2/3 border-l-4 border-azul'>
            <p className='text-azul'>Tenemos amplia experiencia con plastiqueras y empresas que realizan packaging industrial</p>
        </div>
        </div>

    </section>
  )
}
