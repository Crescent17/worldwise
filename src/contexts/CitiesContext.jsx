import {createContext, useContext, useEffect, useState} from "react";

const BASE_URL = 'http://localhost:7000'

const CitiesContext = createContext()

function CitiesProvider({children}) {
    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json()
                setCities(data)
            } catch (err) {
                alert('There was an error loading data!')
            } finally {
                setIsLoading(false)
            }
        }

        fetchCities()
    }, []);

    return <CitiesContext.Provider value={{
        cities, isLoading
    }}>
        {children}
    </CitiesContext.Provider>
}

function useCities() {
    const values = useContext(CitiesContext);
    if (values === undefined) throw new Error('CitiesContext was used outside the CitiesProvider');
    return values;
}

export {CitiesProvider, useCities}