import {useSelector} from 'react-redux';
export function useAuth() {
   
    const {profile} = useSelector(state => state.user);
    // const email = profile ? profile[0].eMail : null
   
    const user = JSON.parse(localStorage.getItem('user'))
    const email = user ? user.eMail : null
    

    return {
        isAuth: !!user,
        email,
        profile,
    };
}