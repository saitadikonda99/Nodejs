import axios from '../Api/Axios'
import useAuth from './useAuth';

const useLogout = () => {
    const { setAuth } = useAuth();
     
    const logout = async () => {
        setAuth({})
        try {
        await axios('/logout', {
            withCredentials: true,
        });
    } catch (error) {
        console.error('Error logging out:', error.message);
     }
    }   
    return logout;
}

export default useLogout;