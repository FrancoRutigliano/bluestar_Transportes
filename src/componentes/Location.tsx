export const Location = () => {
    return (
        <section className="h-screen ">
            <h1 className="text-center lg:text-5xl  lg:p-20 font-medium">Ubicación</h1>
        <article className="flex ">
        <div className="w-1/2  pr-10">
        <div className=' py-32 border-r-4 border-azul flex items-center '>
            <p className='text-azul text-end lg:text-3xl mr-10 ml-20'>Clickeá acá para conocer nuestra ubicación exacta.</p>
        </div>
        </div>
        <div className=" w-1/2" >
      <div >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47497098404!2d-58.59811178078391!3d-34.61543034802167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1725806179588!5m2!1ses-419!2sar"
          width="500"
          height="350"
          style={{ border: 0 }} // Aquí es un objeto, no una cadena
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
          </div>
          </article>
          </section>
    );
  }
  