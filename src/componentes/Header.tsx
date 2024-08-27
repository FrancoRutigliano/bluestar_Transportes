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
 <div className="w-full h-screen relative overflow-hidden">
  <img
    src={empleado}
    alt=""
    className="w-full h-full object-cover transform scale-130 object-[calc(100%+280px)_center] sm:scale-100 sm:object-center"
  />
  <div className="absolute top-80 left-6 flex items-center justify-center  z-10 font-bold">
    <h1 className="text-5xl text-white">Transporte <br /> seguro <br /> y eficiente</h1>
  </div>
</div>






      
      </>
    );
  };
  