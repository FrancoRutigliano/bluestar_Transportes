import argentina from '../assets/arg.jpg'

export const Argentina = () => {
  return (
    <section className="h-screen  flex">
        
        <div className=' w-1/2 flex items-center '>
        <div className='   py-32 border-r-4 border-azul flex items-center '>
            <p className='text-azul text-end lg:text-3xl mr-10 ml-20'>Vamos a todo el país y las tarifas son por servicio de transporte de mercadería de un punto a otro.</p>
        </div>
        </div>
        <div className=' w-1/2 flex justify-center items-center px-10'>
            <img src={argentina} alt=""  />
        </div>

    </section>
  )
}
