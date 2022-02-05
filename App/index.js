/* eslint-disable no-nested-ternary */
import React, {useState, useEffect} from "react";
// import Loading from "./screens/Loading";
// import AuthStackScreen from "./config/AuthenticationStackNavigation";
// import AppDrawerScreen from "./config/DrawerNavigation";
import RootStackNavigation from "./config/RootStackNavigation";

export default () => <RootStackNavigation />
    // const [isLoading, setIsLoading] = useState(true);
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(!isLoading);
    //         setUser({});
    //     }, 500)
    // }, [])

    // if (isLoading) {
    //     return(<Loading />)
    // }
    // return(
    //   <>
    //     {isLoading ? (<Loading />) 
    //     : user ? (<AppDrawerScreen />) : 
    //     (<AuthStackScreen />) }
    //   </>
    // )
