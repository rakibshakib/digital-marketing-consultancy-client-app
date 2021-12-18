import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserState } from "../features/Slice/slice";

const useFirebaseHooks = () => {
    const dispatch = useDispatch();
    const auth = getAuth();
    
    const { user, isAdmin } = useSelector((state) => state.services);
    console.log(user.displayName, user.email, isAdmin);

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {   
            console.log("this is new user", user);      
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
        fetch('https://whispering-hamlet-97781.herokuapp.com/users', {
            method: "POST",
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
