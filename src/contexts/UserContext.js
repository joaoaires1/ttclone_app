import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState ({});
    const [timeline, setTimeline] = useState ([]);

    const addPostTimeline = item => {
        timeline.unshift(item);
    }

    return (
        <UserContext.Provider value={{ user, setUser, timeline, setTimeline, addPostTimeline }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;