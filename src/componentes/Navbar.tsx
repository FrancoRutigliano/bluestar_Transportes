import icon from '../assets/icons/bluestar.svg'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-white/10 fixed top-0 left-0 w-full z-50 '>
        <div className='pb-1'>
            <img src={icon} alt="BLUE STAR" className='w-20 ml-20  ' />
        </div>
        <div className=' flex items-center lg:w-2/3 '>
            <ul className='flex items-center w-2/3 justify-evenly text-white font-inter font-medium ml-44 text-lg   '>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>

            </ul>
        </div>
    </nav>
  )
}
