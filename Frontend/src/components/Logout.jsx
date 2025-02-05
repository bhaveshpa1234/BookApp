import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { use } from 'react'
import toast from 'react-hot-toast'

function Logout() {

    const [authUser, setAuthUser] = useAuth()

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })

            localStorage.removeItem("Users");
            toast.success("Logged out successfully");
            
            setTimeout(() => {

                window.location.reload();
                
            }, 2500)

        } catch (error) {
            toast.error(error.message)
            setTimeout(() => {
                
            }, 2500)
        }
    }
    return (
        <div>
            <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
