import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({children}) => {
    const email = sessionStorage.getItem("email");
    const toastDisplayed = useRef(false);

    useEffect(() => {
        if (!email && !toastDisplayed.current){
            toast.warning("You are not logged in!");
            toastDisplayed.current = true;
        }
    }, [email])

    if (!email){
        return <Navigate to="/login" />;
    }

  return children 
}
