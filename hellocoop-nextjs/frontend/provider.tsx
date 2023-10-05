import { createContext, useContext } from 'react'
import useUser from './user'

const HelloContext = createContext(null);

const HelloProvider = ({ user, children } : any) => { //TBD any
    const u = user || useUser()
    return (
      <HelloContext.Provider value={u}>
        {children}
      </HelloContext.Provider>
    )
}

const useHelloProviderContext = () => {
    return useContext(HelloContext)
};

export { HelloProvider, useHelloProviderContext }