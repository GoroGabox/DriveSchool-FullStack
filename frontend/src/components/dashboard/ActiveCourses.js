'use client'
import {useCoursesContext} from '../../hooks/useCoursesContext'

export default function ActiveCourses() {
    let {courses, theory, practicClasses} = useCoursesContext()
    console.log(courses)
  return (
    <div>
        <div className="">
            {courses.map((i)=>i.name+' / ')}
        </div>
      <div className="">
        {theory? <div>Clases teoricas</div>:<div>Contrata un plan para poder acceder a las clases teoricas</div>}
      </div>
      <div className="">
        {practicClasses>0? <div>{practicClasses}</div>:<div>Contrata un plan para poder acceder a las clases practicas</div>}
      </div>
    </div>
  )
}
