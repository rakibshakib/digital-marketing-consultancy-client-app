import React, { createContext } from 'react';
import useFirebaseHooks from '../../../Hooks/useFirebaseHooks';

export const AuthContext = createContext(null); 

const AuthProvider = ({ children }) => {
    const allContexts = useFirebaseHooks();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider