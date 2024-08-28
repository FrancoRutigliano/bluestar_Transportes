import iconplast from "../assets/iconplast.svg";
import altec from '../assets/altec.png';
import ypf from '../assets/ypf.png';
import endonsan from '../assets/endosan.png';
import plastinhort from '../assets/plastinhort.png';
import grief from '../assets/grief.png';
import Marquee from "react-fast-marquee";

export const Clients = () => {
  return (

    <section className="h-80  mx-20">

    <h1 className="text-center text-5xl mt-20 font-medium ">Nuestros Clientes</h1>

    <div className="relative overflow-hidden h-62  mt-16 ">
    <Marquee speed={150} >
      
        <img src={iconplast} alt="" className="h-56 w-56 object-contain" />
        <img src={plastinhort} alt="" className="h-56 w-56 object-contain" />
        <img src={grief} alt="" className="h-56 w-56 object-contain" />
        <img src={altec} alt="" className="h-56 w-56 object-contain" />
        <img src={ypf} alt="" className="h-56 w-56 object-contain p-5" />
        <img src={endonsan} alt="" className="h-56 w-56 object-contain p-2" />
        {/* Repetimos las imágenes para asegurar la animación continua */}
        <img src={iconplast} alt="" className="h-56 w-56 object-contain" />
        <img src={plastinhort} alt="" className="h-56 w-56 object-contain" />
        <img src={grief} alt="" className="h-56 w-56 object-contain" />
        <img src={altec} alt="" className="h-56 w-56 object-contain" />
        <img src={ypf} alt="" className="h-56 w-56 object-contain  p-5" />
        <img src={endonsan} alt="" className="h-56 w-56 object-contain p-2" />
    </Marquee>

    </div>
    </section>
  );
};
