import empleado from '../assets/Empleado.jpg'

export const Header = () => {
    return (
      // <div
      //   className="relative w-full h-screen bg-cover  "
      //   style={{ backgroundImage:  `url(${empleado})`}}
      // >
      //   <div className="absolute inset-0 bg-gradient-to-t from-azul to-transparent"></div>
      //   {/* Contenido adicional sobre la imagen y gradiente */}
      //   <div className="relative z-10 text-white p-4 bg-lime-300">
      //     <h1 className="text-3xl font-bold">Transporte seguro <br /> y eficiente</h1>
      //     <p className="text-lg">Tenemos más de 25 años de experiencia. Somos una pyme, y nuestra flota cuenta con con chasis y semis tipo saider. Llevamos volumen y poco peso. Contamos con chasis de 5 y 10 mil kilos y semis de 15 y 22 mil kilos.</p>
      //   </div>
      // </div>
      <>
 <div className=" relative w-full h-screen overflow-hidden">
  <img
    src={empleado}
    alt=""
    //  className="w-full h-full object-cover object-center transform lg:scale-100"
    className=" w-full h-full object-cover transform scale-130 object-[calc(100%+12.5rem)_center] sm:object-[calc(100%+8rem)_center] lg:object-[calc(100%+5rem)_center] sm:scale-100 lg:scale-140 sm:object-center lg:object-center xl:object-top "
  />
  <div className="absolute inset-0 bg-gradient-to-t from-azul to-transparent"></div>
  <div className="absolute top-48 lg:top-42 xl:top-36 left-4 lg:left-8 flex flex-col text-white items-start  z-10 " >
    <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins leading-snug sm:leading-normal xl:leading-normal font-bold  " style={{ textShadow: '1px 1px 20px black' }}>Transporte <span className='block sm:inline'> seguro </span>  <span className='sm:block'>y eficiente</span></h1>
    <p className="text-sm sm:text-lg w-2/3 mt-5 xl:w-[40rem]">Tenemos más de 25 años de experiencia. Somos una pyme, y nuestra flota cuenta con con chasis y semis tipo saider. Llevamos volumen y poco peso. Contamos con chasis de 5 y 10 mil kilos y semis de 15 y 22 mil kilos.</p>

  </div>
</div>







      
      </>
    );
  };
  