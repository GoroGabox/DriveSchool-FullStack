'use client'
import { redirect } from 'next/navigation'
import { useAuthContext } from '../hooks/useAuthContext'

const PrivateRoute = ({children}) => {
    let {user} = useAuthContext()
    if (!user) {
        return redirect('/login')
    }
    return children
    }


export default PrivateRoute;
