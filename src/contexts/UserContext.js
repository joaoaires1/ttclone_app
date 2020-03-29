import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState ({});
    const [timeline, setTimeline] = useState ([]);

    return (
        <UserContext.Provider value={{ user, setUser, timeline, setTimeline }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;