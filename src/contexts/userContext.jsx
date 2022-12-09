import { createContext, useState } from "react";

export const UserContext = createContext()


export function UserProvider({children}) {
    const [user, setUser] = useState()
    const value = [user, setUser]
    return <UserContext.Provider value={value}> {children}</UserContext.Provider>
}