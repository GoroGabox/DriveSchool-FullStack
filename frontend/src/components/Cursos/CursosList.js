import React from 'react'
import CursosItem from './CursosItem'

export default function CursosList({cursos}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Cursos</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">         
          {cursos.map((curso) => (<CursosItem curso={curso}/>))}
        </div>
      </div>
    </div>
    </main>
  )
}
