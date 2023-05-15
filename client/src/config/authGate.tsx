import React from "react";
import { useUserQuery } from "../network/userQuery";
import AuthenticationForm from "../components/AuthComps/AuthenticationForm";
import { useAuthToken } from "../config/auth";
import router, { useRouter } from "next/router";
import { useEffect } from "react";


export const AuthGate = ({ children }: any) => {
    // console.log(router.pathname);

    const [authToken] = useAuthToken()
    const userData = useUserQuery();

    const switchRouteFun = async () => {
        if (!authToken) {
            await router.push("/authenticate");
        } else {
            await router.push(router.pathname === "/authenticate" ? "/" : router.pathname);
        }
    };
    useEffect(() => {
        switchRouteFun();
        console.log("authGate useEffect---------------->");
    }, [authToken]);

    return children;
};