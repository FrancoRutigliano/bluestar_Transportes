import blueStarWhite from '../assets/blueStarWhite.svg'
import fb from '../assets/icons/fb.svg'
import ig from '../assets/icons/ig.svg'
import ln from '../assets/icons/ln.svg'
import phone from '../assets/icons/phone.svg'
import sobre from '../assets/icons/sobre.svg'
import ubi from '../assets/icons/ubi.svg'

export const Contacto = () => {
  return (
    <footer className="h-screen bg-azul flex">

      <div className='w-1/3 '>
        <div className='  m-auto pl-20 py-12 '>
          <img src={blueStarWhite} alt="" className=' lg:w-56' />
          <div className='flex   mt-6 '>
            <img src={fb} alt="" className='lg:w-11' />
            <img src={ig} alt="" className='lg:w-11 lg:mx-3' />
            <img src={ln} alt="" className='lg:w-11' />
          </div>

        </div>
        <div className=' m-auto text-white  pl-20 '>
          <div className='flex items-center '>
            <img src={phone} alt="" className='w-10' />
            <p className='pl-5 pt-1'>1154112394 - Ricardo</p>
          </div>
          <div className='flex items-center my-5'>
            <img src={sobre} alt="" className='w-10' />
            <p className='pl-5 pt-1'>transportebstar@gmail.com</p>
          </div>
          <div className='flex items-center'>
            <img src={ubi} alt="" className='w-10' />
            <p className='pl-5 pt-1'>Del Viso - Buenos Aires</p>
          </div>

        </div>

      </div>
      <div className='w-2/3 flex items-center justify-center  flex-col px-20 '>


        <h1 className='w-full text-white lg:text-5xl font-medium mb-5'>Contacto</h1>
        <form action="#" className='bg-white w-full h-2/3  rounded-xl p-5 flex flex-col '>
          <label htmlFor="nombre"></label>
          <input type="text" id='nombre' className='bg-gris  rounded-xl  placeholder:text-azul lg:text-lg p-5' placeholder='Nombre y Apellido' />


          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" className='bg-gris p-5 rounded-xl placeholder:text-azul my-2 lg:text-lg'/>


            <label htmlFor="comentarios"></label>
            <textarea id="comentarios" name="comentarios" placeholder="Tu mensaje" className='bg-gris p-5 rounded-xl placeholder:text-azul lg:text-lg' ></textarea>

      <button className='bg-azul text-white w-full rounded-xl py-5 font-medium lg:text-2xl'>ENVIAR</button>
        </form>
      </div>

    </footer>
  )
}
