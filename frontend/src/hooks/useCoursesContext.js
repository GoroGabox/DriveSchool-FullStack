
import {useContext} from 'react'
import CoursesContext from '../context/CoursesContext'

export const useCoursesContext = () => {
    const context = useContext(CoursesContext)
    return context
}