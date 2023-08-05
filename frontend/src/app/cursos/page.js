import CursosList from "../../components/Cursos/CursosList"

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/v1/courses/list/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Courses() {
  
  {/*Aplicar css a datos de la api*/}
  const cursos = await getData()
  return (
    <CursosList cursos={cursos}/>
  )
}
