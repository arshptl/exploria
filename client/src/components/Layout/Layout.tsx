import Link from 'next/link'
import React from 'react'
import styles from '../LandingPage/landingPage.module.css';
import { useAuthToken, useLogout } from '@/config/auth';


const Layout = ({ children }: any) => {
    const logout = useLogout();
    // const [authToken] = useAuthToken();
    return (
        <div className={styles.globalPadding}>
            <div className={styles.header}>
                <a href='/'><h2>Travel Itinerary</h2></a>
                <div style={{ display: "flex", gap: "1em" }}>
                    <Link href="/itineraries" className={styles['button-23']} role="button">Your Itenary</Link>
                    <Link href="/profile" className={styles['button-23']} role="button">Profile</Link>
                    <a onClick={logout} className={styles['button-23']} role="button">Logout</a>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Layout