import manos from '../assets/icons/manos.svg'
import camion from '../assets/icons/camion.svg'
import antena from '../assets/icons/antena.svg'
import deposito from '../assets/icons/deposito.svg'
import arg from '../assets/icons/arg.svg'
import hours from '../assets/icons/24hs.svg'

export const WorkWithUs = () => {
  return (
        <section className='bg-azul text-white w-full lg:p-20 '>
            <h1 className='text-center lg:text-5xl  lg:pt-20 font-medium  '>Trabajá con nosotros</h1>
        <article className='grid grid-cols-3 gap-4 mx-10 mt-20'>

        <div className='flex flex-col items-center justify-center text-center'>
            <img src={manos} alt="" className='lg:w-1/3 lg:p-2' />
             <p className='font-medium lg:text-xl' >Confianza y compromiso</p>   
            <p>Empresas prestigiosas continúan eligiendo trabajar con nosotros</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
            <img src={camion} alt="" className='lg:w-1/3 lg:p-4' />
             <p className='font-medium lg:text-xl'>Amplia flota de camiones</p>   
            <p>Empresas prestigiosas continúan eligiendo trabajar con nosotros</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
            <img src={antena} alt="" className='lg:w-1/3 lg:p-5'/>
             <p className='font-medium lg:text-xl'>Rastreador Satelital y vigía</p>   
            <p>Nuestra flota completa cuenta con rastreador satelital. Tenemos tecnología incorporada brindando siempre el mejor servicio</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
            <img src={deposito} alt="" className='lg:w-1/3 lg:p-5' />
             <p  className='font-medium lg:text-xl'>Servicio de depósito</p>   
            <p>Servicio de depósito y almacenamiento</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
            <img src={arg} alt="" className='lg:w-1/3 lg:py-2 lg:px-7'/>
             <p  className='font-medium lg:text-xl'>A todo el país</p>   
            <p>Realizamos viajes en Argentina y países limítrofes</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
            <img src={hours} alt=""  className='lg:w-1/3 lg:py-2 lg:px-5' />
            <p  className='font-medium lg:text-xl'>24 horas</p>   
            <p>Auxilio ante cualquier emergencia las 24 horas.</p>
        </div>
        </article>
    </section>
  )
}
