import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Partners() {
  return (
    <div className="py-20 bg-no-repeat z-0 bg-red-500 w-full">
      <div className="grid md:grid-cols-2 gap-6 grid-cols-1 mx-auto px-12">
        <h2 className="text-4xl font-semibold mb-6 text-center text-white">Cursos de conducción a empresas</h2>
        <button className="bg-blue-500 text-white px-4 py-2 h-fit w-fit rounded-md place-self-center">
            <Link href="/convenios">
                Ver convenios
            </Link>
        </button>
        
      </div>
    </div>
  )
}
