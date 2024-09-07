// import empleado from '../assets/Empleado.jpg'
  import camion from '../assets/Camion.jpg'
  import camion2 from '../assets/Camion2.jpg'
  import camiones from '../assets/Camiones.jpg'
  import ImageGallery from 'react-image-gallery'
  import "react-image-gallery/styles/css/image-gallery.css"
  import '../Header.css'
  
export const Header = () => {

  const images = [
    {
      original: camion,
      
    },
    {
      original: camiones
    },
    {
      original: camion2
    }
  ]

    return (
    
      <>
 {/* <div className=" relative w-full h-screen overflow-hidden">
  <img
    src={empleado}
    alt=""
    //  className="w-full h-full object-cover object-center transform lg:scale-100"
    className=" w-full h-full object-cover transform scale-130 object-[calc(100%+12.5rem)_center] sm:object-[calc(100%+8rem)_center] lg:object-[calc(100%+5rem)_center] sm:scale-100 lg:scale-140 sm:object-center lg:object-center xl:object-top "
  />
  <div className="absolute inset-0 bg-gradient-to-t from-azul to-transparent"></div>
  <div className="absolute top-48 lg:top-42 xl:top-36 left-4 lg:left-8 xl:left-12 flex flex-col text-white items-start  z-10 " >
    <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins leading-snug sm:leading-normal xl:leading-normal font-bold  " style={{ textShadow: '1px 1px 20px black' }}>Transporte <span className='block sm:inline'> seguro </span>  <span className='sm:block'>y eficiente</span></h1>
    <p className="text-sm sm:text-lg w-2/3 mt-5 xl:w-[40rem]">Tenemos más de 25 años de experiencia. Somos una pyme, y nuestra flota cuenta con con chasis y semis tipo saider. Llevamos volumen y poco peso. Contamos con chasis de 5 y 10 mil kilos y semis de 15 y 22 mil kilos.</p>

  </div>
</div> */}

<div className="custom-gallery lg:h-screen position-relative">
  <div className='absolute  bottom-10 lg:bottom-20 left-10 lg:left-20 z-50 '>
  
  <h1 className=' text-xs lg:text-[4.8rem] text-white font-bold leading-snug sm:leading-normal xl:leading-normal' style={{ textShadow: '1px 1px 30px black' }}>Transporte <span className='block sm:inline'> seguro </span>  <span className='sm:block'>y eficiente</span></h1> 
  <p className="text-xs sm:text-lg lg:text-2xl w-2/3 xl:w-[40rem] text-white">Tenemos más de 25 años de experiencia. Somos una pyme, y nuestra flota cuenta con con chasis y semis tipo saider. Llevamos volumen y poco peso. Contamos con chasis de 5 y 10 mil kilos y semis de 15 y 22 mil kilos.</p>
  </div>
  <ImageGallery items={images}
  showFullscreenButton={false}
  showPlayButton={false}
  showThumbnails={false}
  showNav={false}
  showBullets={true}
  autoPlay={true}
  additionalClass="custom-gallery"
/>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-azul to-transparent pointer-events-none"></div>
</div>

      
      </>
    );
  };
  