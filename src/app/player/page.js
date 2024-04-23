import Navbar from '@/components/navbar'
import React from 'react'

export default function Player() {
    return (
        <main className='bg-black text-white'>
            <Navbar />
            <section className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1 className="text-4xl font-bold my-6 text-white">Queremos que estés con nosotros, regístrate aquí</h1>
                
                <iframe
                    className="airtable-embed w-full h-[533px] border-1 bg-transparent border-white ronded-lg"
                    src="https://airtable.com/embed/appZxKGNdbsk7RWRT/pagOWI0M91k3ojM9h/form"
                ></iframe>

            </section>
        </main>
    )
}
