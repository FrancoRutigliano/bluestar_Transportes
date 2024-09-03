import icon from '../assets/icons/bluestar.svg'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-white/10 fixed top-0 left-0 w-full z-50 '>
        <div className='pb-1'>
            <img src={icon} alt="BLUE STAR" className='w-10 ml-10 lg:w-20 lg:ml-20  ' />
        </div>
        <div className='flex w-[17rem] justify-center items-center lg:w-2/3 mr-10   '>
            <ul className='  flex w-full items-center lg:w-2/3 justify-evenly text-white font-inter font-medium lg:ml-44 text-xs lg:text-lg'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>

            </ul>
        </div>
    </nav>
  )
}
