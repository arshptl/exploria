import { useAllItinerariesQuery } from '@/generated/graphql';
import React from 'react'
import styles from "../styles/itineraries.module.css";
import Timeline from '@/components/itineries.page/Timeline';

const Itineraries = () => {
    const { data, loading, error } = useAllItinerariesQuery();

    if (error) {
        return <>
            <p>Error :(</p>
            <p>{error.message}</p>
        </>;
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    // const getDate = (timeStamp: any) => {
    //     const date = new Date(timeStamp);
    //     console.log(date);
    //     return date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
    // }

    return (
        <div className={styles.globalWrapper}>
            <h1>Your Itineraries</h1>
            <br />
            <div className={styles.itineraryCardWrapper}>
                {data?.itineraries.map((itinerary) => {
                    return <div className={styles.itineraryCard}>
                        <h2>{itinerary?.title}</h2>
                        <p>Total Days: {itinerary?.days}</p>
                        <p>Cost: {itinerary?.cost}₹</p>
                        <p>Location: {itinerary?.place}</p>
                        <p>Flight Name: {itinerary?.flight}</p>
                        <p>{Date.apply(itinerary?.createdAt)}</p>
                        {/* <Timeline /> */}
                        <details>
                            <summary>Attractions</summary>
                            <div>{itinerary?.attractions.map((attraction) => {
                                return <Timeline key={attraction?.name} name={attraction?.name} location={attraction?.location} />
                            })}</div>
                        </details>
                        {/* <p>{itinerary?.attractions.map((attraction) => {
                            return <div key={attraction?.name}>
                                <p>{attraction?.name}</p>
                                <p>{attraction?.category}</p>
                                <p>{attraction?.location}</p>
                            </div>
                        })}
                        </p> */}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Itineraries