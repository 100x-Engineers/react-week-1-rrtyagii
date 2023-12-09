import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const InitialUserContext = createContext();

export function InitialUserProvider({children}){
    const [form, setForm] = useState({
        id: '31231234',
        username: 'allAuover',
        name: 'Rishabh',
        bio: "Some bio",
        email: '',
        password: '',
        month: 1,
        day: 1,
        year: 2023,
    });

    return (
        <InitialUserContext.Provider value={{ form, setForm }}>
            {children}
        </InitialUserContext.Provider>
    ); 
}; 

InitialUserProvider.propTypes = {
    children: PropTypes.node,
};