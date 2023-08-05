'use client'
import { redirect } from 'next/navigation'
import { useAuthContext } from '../hooks/useAuthContext'

const PrivateRoute = ({children}) => {
    let {user} = useAuthContext()
    console.log(user)
    if (!user) {
        return redirect('/login')
    }
    return children
    }


export default PrivateRoute;
