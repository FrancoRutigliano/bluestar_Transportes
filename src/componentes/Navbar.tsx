import icon from '../assets/blue_star_icon.png'

export const Navbar = () => {
  return (
    <nav className='bg-red-200 flex justify-between'>
        <div>
            <img src={icon} alt="BLUE STAR" className='w-20 bg-blue-500' />
        </div>
        <div className='bg-green-200 flex items-center lg:w-[600px]'>
            <ul className='flex items-center w-2/3 justify-between  bg-sky-200 '>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>

            </ul>
        </div>
    </nav>
  )
}
