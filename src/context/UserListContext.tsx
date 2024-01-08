import { createContext } from 'react';
import { useState } from 'react';

export const UserListContext = createContext({} as UserContextType)


export const UserProvider = ({ children }: any) => {

    const [personsList, setPersonsList] = useState<string[]>([]);

    const addPersonsList = (personName : string) => {
        setPersonsList((newUserName) => ([...newUserName, personName]));
    };

    return (
        <UserListContext.Provider value={{ personsList, addPersonsList, setPersonsList }}>
            {children}
        </UserListContext.Provider>
    );
};


export interface UserContextType {
    personsList: string[],
    addPersonsList: (personName:string)=>void;
    setPersonsList: (usersList:string[])=>void;
}