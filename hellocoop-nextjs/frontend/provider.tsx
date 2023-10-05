import { createContext, useContext } from "react"

const HelloContext = createContext(null);

const HelloProvider = ({ user, children } : any) => { //TBD any
    return (
      <HelloContext.Provider value={user}>
        {children}
      </HelloContext.Provider>
    )
}

const useHelloProviderContext = () => {
    return useContext(HelloContext)
};

export { HelloProvider, useHelloProviderContext }