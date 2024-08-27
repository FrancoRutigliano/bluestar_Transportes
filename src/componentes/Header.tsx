import empleado from '../assets/Empleado.jpg'

export const Header = () => {
    return (
      <div
        className="relative w-full h-screen bg-cover  "
        style={{ backgroundImage:  `url(${empleado})`}}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-azul to-transparent"></div>
        {/* Contenido adicional sobre la imagen y gradiente */}
        <div className="relative z-10 text-white p-4">
          {/* <h1 className="text-3xl font-bold">Título sobre la imagen</h1> */}
          {/* <p className="text-lg">Subtítulo o descripción aquí</p> */}
        </div>
      </div>
    );
  };
  