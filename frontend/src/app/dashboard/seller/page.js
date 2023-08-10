import CalendarioSemanal from '../../../components/dashboard/WeekCalendar'
import ListSales from '../../../components/dashboard/ListSales'


async function getSales() {
  const res = await fetch('http://127.0.0.1:8000/api/v1/courses/sales/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getProfessors() {
  const res = await fetch('http://127.0.0.1:8000/api/v1/accounts/professors/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function page() {
  const sales = await getSales()
  const professors = await getProfessors()
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-evenly px-8">
      <div>
        Seller Dashboard
      </div>
      <ListSales sales={sales}/>
      <CalendarioSemanal professors={professors}/>
    </main>
  )
}
