import blueStarWhite from '../assets/blueStarWhite.svg'
import fb from '../assets/icons/fb.svg'
import ig from '../assets/icons/ig.svg'
import ln from '../assets/icons/ln.svg'
import phone from '../assets/icons/phone.svg'
import sobre from '../assets/icons/sobre.svg'
import ubi from '../assets/icons/ubi.svg'

export const Contacto = () => {
  return (
    <section className="h-screen bg-azul flex">

    <div className='w-1/3 '>
        <img src={blueStarWhite} alt="" />
        <img src={ig} alt="" />
        <img src={fb} alt="" />
        <img src={ln} alt="" />
        <img src={phone} alt="" />
        <img src={sobre} alt="" />
        <img src={ubi} alt="" />

    </div>
    <div className='w-2/3 flex items-center justify-center'>
    <form action="#" className='bg-white w-1/2 h-1/2 rounded-xl'>
        <label htmlFor="nombre">Nombre y Apellido</label>
        <input type="text" id='nombre'/>
    </form>
    </div>
    </section>
  )
}
