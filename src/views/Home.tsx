import { Navbar } from "../componentes/Navbar"
import { Footer } from "../componentes/Footer"
import { Header } from "../componentes/Header"
import { Stats } from "../componentes/Stats"
import { Clients } from "../componentes/Clients"

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Stats/>
        <Clients/>
        {/* <Footer/> */}
    </>
  )
}
