import { useContext } from 'react'
import Context from './Context'


export const useProfile = () => {
    const [state, dispatch] = useContext(Context)
    return[state, dispatch]
}