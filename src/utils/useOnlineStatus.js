import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const[onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() =>{

        //For online
        window.addEventListener("offline", () =>{
            setOnlineStatus(false);
        });

        //For offline
        window.addEventListener("offline", () =>{
            setOnlineStatus(false);
        });
    }, [])


    return onlineStatus;
};

export default useOnlineStatus;