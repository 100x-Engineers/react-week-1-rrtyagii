import { createContext, useState } from "react";
import PropTypes from 'prop-types';

import UserBackground from "../assets/image-17.png"; 
import UserAvatar from "../assets/tweet-2-user-avatar.svg"; 

export const InitialUserContext = createContext();

export function InitialUserProvider({children}){
    const [form, setForm] = useState({
        username: '',
        name: '',
        bio: '',
        bioLink: '',
        email: '',
        password: '',
        month: 1,
        day: 1,
        year: 2023,
        joinedAt: 'December 2023',
        location: 'Earth',
        userAvatar: UserAvatar,
        userBackground: UserBackground,
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