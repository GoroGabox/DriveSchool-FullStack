'use client'
import OptionSelector from './OptionSelector'
import useCalendarContext from "../../hooks/useCalendarContext";

export default function Selector({array}) {
  let {handleProfesor} = useCalendarContext()
  return (
    <select name="" className="mb-4" onChange={handleProfesor}>
        {array.map((item, i)=><OptionSelector key={i} item={item}/>)}
    </select>
  )
}
