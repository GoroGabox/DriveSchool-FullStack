import ActiveCourses from '../../../components/dashboard/ActiveCourses'

async function getPracticClasses() {
  const res = await fetch("http://127.0.0.1:8000/api/v1/practic_classes/list/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getTeoricContent() {
  const res = await fetch("http://127.0.0.1:8000/api/v1/teoric_content/pdf/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Perfil() {
  const practica = await getPracticClasses();
  const teoria = await getTeoricContent();

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-evenly px-8">
      <ActiveCourses>
        
      </ActiveCourses>
    </main>
  );
}
