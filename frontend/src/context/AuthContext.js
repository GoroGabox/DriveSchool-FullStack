'use client'

import { createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import {useRouter, redirect} from 'next/navigation'

const AuthContext = createContext(null)
export default AuthContext;

export const AuthProvider = ({children}) => {
    const router = useRouter();
    
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(false)


    let registerUser = async (e)=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/v1/accounts/register/student/',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'name':e.target.name.value,
                'lastname':e.target.lastname.value, 
                'email':e.target.email.value,
                'password':e.target.password.value,
                'password2':e.target.password2.value,
                'rut':e.target.run.value,
                'address':e.target.address.value,
                'cellphone':e.target.cellphone.value,
                'user_type': 'Student',
                'has_licence': false,
                'practic_eval': false,
                'teoric_eval': false,
                'psychotechnic_eval': false
            })
        })
        let data = await response.json()

        if(response.ok){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            setLoading(true)
            router.push('/dashboard/student')
        }else{
            alert('Something went wrong!')
        }
    };

    let loginUser = async (e)=> {
        e.preventDefault()
        
        let response = await fetch('http://127.0.0.1:8000/api/v1/accounts/login/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'email':e.target.email.value, 
                'password':e.target.password.value})
        })

        let data = await response.json()
        if(response.ok){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            setLoading(true)
            if (jwt_decode(data.access).user_type=='student') {router.push('/dashboard/student')}
            if (jwt_decode(data.access).user_type=='professor') {router.push('/dashboard/professor')}
            if (jwt_decode(data.access).user_type=='seller') {router.push('/dashboard/seller')}
        }else{
            throw new Error('Failed to fetch data')
        }
    };

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        redirect('/login')
    };

    let updateToken = async ()=> {

        let response = await fetch('http://127.0.0.1:8000/api/v1/accounts/token/refresh/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens.refresh})
        })

        let data = await response.json()
        
        if (response.ok){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    };

    let contextData ={
        user:user,
        authTokens:authTokens,
        registerUser:registerUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
    };

    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
