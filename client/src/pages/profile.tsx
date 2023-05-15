import { useGetMeQuery } from '@/generated/graphql';
import React from 'react'
import styles from "../styles/Profile.module.css";

const Profile = () => {
    const { data, loading, error } = useGetMeQuery();

    if (error) {
        return <p>Error :(</p>;
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className={styles.background}>
            <h1>Profile</h1>
            <p>{data?.me?.name}</p>
            <p>{data?.me?.email}</p>
        </div>
    )
}

export default Profile