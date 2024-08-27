import icon from '../assets/blue_star_icon.png'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-white/40 fixed top-0 left-0 w-full z-50 '>
        <div >
            <img src={icon} alt="BLUE STAR" className='w-20 ' />
        </div>
        <div className=' flex items-center lg:w-[600px]'>
            <ul className='flex items-center w-2/3 justify-between   '>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>

            </ul>
        </div>
    </nav>
  )
}
