// import { Footer } from "../componentes/Footer"
import { Navbar } from "../componentes/Navbar"
import { Header } from "../componentes/Header"
import { Stats } from "../componentes/Stats"
import { Clients } from "../componentes/Clients"
import { Packaging } from "../componentes/Packaging"
import { Argentina } from "../componentes/Argentina"
import { WorkWithUs } from "../componentes/WorkWithUs"
import { Nosotros } from "../componentes/Nosotros"
import { Location } from "../componentes/Location"
import { Contacto } from "../componentes/Contacto"

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Stats/>
        <Clients/>
        <Packaging/>
        <Argentina/>
        <Nosotros/>
        <WorkWithUs/>
        <Location/>
        <Contacto/>        

    </>
  )
}
