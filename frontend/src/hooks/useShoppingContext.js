
import {useContext} from 'react'
import ShoppingContext from '../context/ShoppingContext'

export const useShoppingContext = () => {
    const context = useContext(ShoppingContext)
    return context
}