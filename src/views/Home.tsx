// import { Footer } from "../componentes/Footer"
import { Navbar } from "../componentes/Navbar"
import { Header } from "../componentes/Header"
import { Stats } from "../componentes/Stats"
import { Clients } from "../componentes/Clients"
import { Packaging } from "../componentes/Packaging"
import { Argentina } from "../componentes/Argentina"
import { WorkWithUs } from "../componentes/WorkWithUs"

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Stats/>
        <Clients/>
        <Packaging/>
        <Argentina/>
        <WorkWithUs/>
        {/* <Footer/> */}
    </>
  )
}
