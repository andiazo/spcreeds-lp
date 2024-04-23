import Navbar from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-black text-white'>
      <Navbar />

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-6xl font-bold my-6 text-white">Bienvenidos a SpCreeds</h1>
            <p className="mb-8 leading-relaxed text-white">
              Descubre y potencia tu talento en el universo de Valorant con SpCreeds, el epicentro para aspirantes y profesionales de esports.
              Únete a nuestra red y conviértete en una estrella emergente del circuito competitivo.
              Eleva tu juego y carrera al máximo nivel con nuestro soporte y comunidad.
            </p>
            <div className="flex justify-center">
              <a href='https://discord.gg/b7atqU35mx'><button className="btn btn-primary mb-4">Explora Talentos</button></a>
              <Link href='/player'><button className="btn btn-secondary mb-6 ml-4">Únete Como Jugador</button></Link>
            </div>
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div> */}
        </div>
      </section>
      {/*  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">ESPORTS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Impulsa Tu Carrera con SpCreeds</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h3 className="card-title text-xl font-semibold">Para Jugadores</h3>

                </div>
                <div className="flex-grow">
                  <p>Accede a un mundo de oportunidades, mejora continua, y conexiones estratégicas con equipos y patrocinadores, todo diseñado para catapultar tu carrera.</p>
                  <Link href='/player'><button className="my-4 btn btn-primary">Únete Ahora</button></Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h3 className="card-title text-xl font-semibold">Para Equipos</h3>

                </div>
                <div className="flex-grow">
                  <p>Recluta los mejores talentos emergentes, gestiona tu equipo de manera eficaz, y asegura patrocinios que potencien tu presencia en el mercado.</p>

                  <a href='https://discord.gg/b7atqU35mx'><button className="btn btn-primary m-4">Explora Talentos</button></a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h3 className="card-title text-xl font-semibold">Para Patrocinadores</h3>
                </div>
                <div className="flex-grow">
                  <p>Conecta con los más destacados equipos y jugadores en el escenario competitivo de Valorant y aumenta la visibilidad de tu marca.</p>
                  <a href='https://discord.gg/b7atqU35mx'><button className="my-4 btn btn-primary">Colabora con nosotros</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
    </main>

  )
}
