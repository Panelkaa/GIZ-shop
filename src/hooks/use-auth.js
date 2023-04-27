import {useSelector} from 'react-redux';

export function useAuth() {
    const {profile} = useSelector(state => state.user);
    const email = profile ? profile[0].eMail : null
    

    return {
        isAuth: !!profile,
        email,
    };
}