import CalendarioSemanal from '../../../components/dashboard/WeekCalendar'
import CalendarioSemanalLaboral from '../../../components/dashboard/WorkWeekCalendar'


export default function page() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-evenly px-8">
      <div>
        Vendedor
      </div>
      <div>
        CRUD CLASES PRACTICAS
      </div>
      <div>
        <CalendarioSemanal/>
      </div>
    </main>
  )
}
