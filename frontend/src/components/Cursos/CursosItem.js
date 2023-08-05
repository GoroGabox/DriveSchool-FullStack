import React from 'react'

export default function CursosItem({curso}) {
  return (
    <a key={curso.id} href={'/cursos/'+curso.id} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
                src={curso.imageSrc}
                alt='imagen referencial'
                className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{curso.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${curso.price}</p>
    </a>
  )
}
