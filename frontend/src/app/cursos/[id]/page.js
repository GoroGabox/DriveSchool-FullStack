import CursoDetail from "../../../components/Cursos/CursoDetail";

async function getData(id) {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/courses/list/${id}/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Curso({ params }) {
  const curso = await getData(params.id);

  return (
    <CursoDetail curso={curso}/>
  );
}
