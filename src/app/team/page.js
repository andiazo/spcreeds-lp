import Navbar from '@/components/navbar'
import React from 'react'

export default function Team() {
  return (
    <main className='bg-black text-white'>
      <Navbar />
      <section className='flex min-h-screen flex-col items-center p-24'>
        <p className='text-white'>Si quieres ver Jugadores</p>
        <a className='link text-green-500' href='https://discord.gg/b7atqU35mx' target='_blank'> contactame</a>
      </section>

    </main>
  )
}
