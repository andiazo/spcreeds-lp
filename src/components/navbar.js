'use client'
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar bg-black text-white">

            <div className="flex-1">
                <Link href={'/'} className="btn btn-ghost text-xl">SpCreeds</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2 space-x-2">
                    <li><Link href={'/player'}>Jugador</Link></li>
                    <li><Link href={'/team'}>Equipo</Link></li>
                    <li className='text-black font-bold bg-green-500 hover:bg-green-300 rounded-lg' ><a href={'https://discord.gg/UkgxFHyEMp'} target='_blank'>Discord</a></li>
                </ul>
            </div>
        </div>
    )
}
