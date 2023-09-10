import styles from './CountryList.module.css'
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";

export default function CountryList({cities, isLoading}) {
    const countries = cities.reduce((arr, city) => {
        if (!arr.map(el => el.country).includes(city.country)) return [...arr, {country: city.country, emoji: city.emoji}]
        else return arr
    }, [])
    if (isLoading) return <Spinner/>

    if (cities.length === 0) return <Message message='Add your first city by clicking on a city on the map'/>
    return <ul className={styles.countryList}>
        {countries.map(country => <CountryItem country={country}/>)}
    </ul>
}