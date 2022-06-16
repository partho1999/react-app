import React from "react";
import { useState } from "react";

import { createContext } from "react";


export const UserContext = createContext();
export const UserProvider = (props) => {
        const [users, setUsers] = useState([
                {id:1, name:"John", position:"front_End Dev", salary:40000},
                {id:2, name:"Peter", position:"AI Engineer", salary:48000},
                {id:3, name:"Mary", position:"Data Scientist", salary:50000}   
        ]);

        return (
                <UserContext.Provider value={[users, setUsers]}>
                  {props.children}
                </UserContext.Provider>
        );
};