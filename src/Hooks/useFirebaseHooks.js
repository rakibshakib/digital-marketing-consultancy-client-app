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
            if (user) {
                saveUser(user.email, user.displayName)
                dispatch(updateUserState(user))
            } else {
                dispatch(updateUserState({}))
            }
        });
        return () => unsubscribed;
    }, [auth])

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    // saveUser(user.email, user.displayName)
}
export default useFirebaseHooks; 
