import { createContext, useState, useContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setAuthToken] = useState('');
    return (
        <AuthContext.Provider value={{token, setAuthToken}}>
        {children}
        </AuthContext.Provider>
    );
}; 

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}