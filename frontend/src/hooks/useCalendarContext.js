import { useContext } from "react";
import CalendarContext from '../context/CalendarContext' 


export default function useCalendarContext() {
    const context = useContext(CalendarContext)
  return context
}
