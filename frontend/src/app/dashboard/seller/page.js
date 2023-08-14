import CalendarioSemanal from "../../../components/dashboard/WeekCalendar";
import ListSales from "../../../components/dashboard/ListSales";
import ListPractices from "../../../components/dashboard/ListPractices";
import { CalendarProvider } from "../../../context/CalendarContext";

async function getSales() {
  const res = await fetch("http://127.0.0.1:8000/api/v1/courses/sales/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCourses() {
  const res = await fetch("http://127.0.0.1:8000/api/v1/courses/list/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getProfessors() {
  const res = await fetch("http://127.0.0.1:8000/api/v1/accounts/professors/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getStudents() {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/accounts/students/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page() {
  const sales = await getSales();
  const professors = await getProfessors();
  const courses = await getCourses();
  const students = await getStudents();

  return (
    <CalendarProvider>
      <main className="flex min-h-screen w-full flex-col items-center justify-evenly px-8">
        <h2>Seller Dashboard</h2>
        <ListSales sales={sales} cursos={courses} stds={students} />
        <div className="flex">
          <CalendarioSemanal professors={professors} />
          <ListPractices/>
        </div>
      </main>
    </CalendarProvider>
  );
}
