import { createContext, useState } from "react";


export const dashboardContext = createContext();

function Context({ children }) {

    const [toggle, setToggle] = useState(false)

    const value = { toggle, setToggle }

    return (
        <dashboardContext.Provider value={value}>
            {children}
        </dashboardContext.Provider>
    );
};

export default Context;