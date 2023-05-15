import React from 'react'
import cx from 'classnames'
import styles from './landingPage.module.css'
import landingImage from '../../../public/images/japanback.jpg'
import Image from 'next/image'
import { useCreateItineraryMutation } from '@/generated/graphql'
import { GET_ALL_ITINERARIES } from '@/gql/queries'


const LandingPage = () => {
    const [createItineraryMutation, { data, loading, error }] = useCreateItineraryMutation({
        onCompleted: (data: any) => {
            console.log(data);
        },
    });

    const validateForm = (e: any) => {
        e.preventDefault();
        createItineraryMutation({
            variables: {
                input: {
                    place: e.target.place.value,
                    days: e.target.days.value.toString()
                }
            },
            refetchQueries: [GET_ALL_ITINERARIES]
        }).catch((error) => {
            alert(error.message);
        }).finally(() => {
            // clear the form
            e.target.place.value = "";
            e.target.days.value = "";
            // Give the message that the itinerary has been created
            alert("Itinerary Created");
        });

    }
    return (
        <div className={styles.imagecontainer}>
            <Image src={landingImage} alt="japan" className={cx(styles.backimg, styles.darken)} />
            <div className={styles.centered}>
                <div className={styles.headertext}>Create Travel Itinerary</div>
                <a href="#create" className={styles['button-27']} role="button">Start</a>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <h2 id='create'>Enter the place name, and we will create an Itinerary for you</h2>
                <form
                    onSubmit={validateForm}
                >
                    <input type="text"
                        id="place"
                        name="place" className={styles.inputStyle} placeholder='Input Location' />
                    <input type="number"
                        id="days"
                        name="days" className={styles.inputStyle} placeholder='Input Total Days' />
                    <br />
                    <br />
                    <button className={styles['button-27']} role="button">Create</button>
                </form>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default LandingPage