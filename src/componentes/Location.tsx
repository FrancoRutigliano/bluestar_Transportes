import arrow from '../assets/arrow.svg'
export const Location = () => {
    return (
        <section className="h-screen ">
            <h1 className="text-center lg:text-5xl  lg:p-20 font-medium">Ubicación</h1>
        <article className="flex  ">
        <div className="w-1/2  pr-10">
        <div className=' py-32 border-r-4 border-azul flex flex-col justify-center items-center text-center '>
            <p className='text-azul  lg:text-3xl '>Clickeá acá para conocer nuestra ubicación exacta.
            </p>
            <img src={arrow} alt="" className='w-16 mt-8'/>
        </div>
        </div>
        <div className=" w-1/2  flex justify-center items-center" >
      <div  >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62600.82894196237!2d-58.85175196628895!3d-34.450858566636896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc993fb6f5b121%3A0x3946b374735be9b3!2sDel%20Viso%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1726420162481!5m2!1ses-419!2sar"
          width="600"
          height="350"
          style={{ border: 0 }} // Aquí es un objeto, no una cadena
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62600.82894196237!2d-58.85175196628895!3d-34.450858566636896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc993fb6f5b121%3A0x3946b374735be9b3!2sDel%20Viso%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1726420162481!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          
      </div>
          </div>
          </article>
          </section>
    );
  }
  