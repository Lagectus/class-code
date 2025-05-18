import { createContext, useState } from "react";

const dataStore = createContext();

export const DataStoreProvider = ({parneet})=>{
    const [data,setData] = useState(100);
    return (
        <dataStore.Provider value = {data}>
            {parneet}
        </dataStore.Provider>
    )

}