import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-full flex-col m-15 items-center">
      <div className="grid grid-cols-first-block pt-12 w-1242">
        <div className="flex flex-col items-center justify-center gap-3 w-687">
          <h1 className="font-bold text-7xl  ">Optimiza tu flujo de trabajo y potencia tu negocio con <span className="text-green">AutoBot</span>.</h1>
          <p className="font-bold text-3xl">Al automatizar tareas  y procesos repetitivos, AutoBot te ayuda a ahorrar tiempo, impulsando tu rentabilidad y productividad.</p>
        </div>
        <Image  className=' w-555 pl-2 pt-6' src='/landingPage.jpg' width={544} height={531} quality={100} alt='dashboard image'/>
      </div>
      <h1 className="text-6xl text-center font-bold pt-24 max-w-7xl">Empieza para tener acceso a tu chatbot y automatizar tu canal de ventas.</h1>
      <h3 className="text-2xl text-center text-gray-600 pt-10">Delegar tareas nunca habia sido tan facil.</h3>


      <div className=" grid grid-cols-3 gap-12 my-24 ">
        <div className="flex flex-col max-w-xs gap-1">
          <p className="text-green font-bold text-xl  text-start border-t-2 border-gray-400">Paso 1</p>
          <p className="text-lg font-bold">Elige tu plan</p>
          <p>Ve los <Link className="text-green underline underline-offset-2" href='/Register'>planes</Link> que tenemos para ti y elige el que mejor se ajuste a tus necesidades.</p>
        </div>
        <div className="flex flex-col max-w-xs border-t-2 border-gray-400 gap-1">
          <p className="text-green font-bold text-xl text-start">Paso 2</p>
          <p className="text-lg font-bold">Registra tu empresa</p>
          <p>Registra tu empresa y realiza tu pago para tener acceso a la plataforma.</p>
        </div>
        <div className="flex flex-col max-w-xs border-t-2 border-gray-400 gap-1 pb-4">
          <p className="text-green font-bold text-xl text-start ">Paso 3</p>
          <p className="text-lg font-bold">Empieza a disfrutar de AutoBot</p>
          <p>Comienza a trabajar con todas las herramientas que tenemos disponibles para tu negocio.</p>
        </div>
        
      </div>
    </main>
    </>
  );
}
