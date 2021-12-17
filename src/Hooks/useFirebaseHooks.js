import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserState } from "../features/Slice/slice";

const useFirebaseHooks = () => {
    const dispatch = useDispatch();
    const auth = getAuth();
    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                dispatch(updateUserState(user))
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken)
                //     })
            } else {
                dispatch(updateUserState({}))
            }
        });
        return () => unsubscribed;
    }, [auth])


}
export default useFirebaseHooks; 
