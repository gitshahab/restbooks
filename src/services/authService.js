import { toast } from "react-toastify";

export async function login(authDetail, validate){
    if(validate()){
        try {
            const response = await fetch(`${process.env.REACT_APP_HOST}/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(authDetail)
            });
            const resp = await response.json();
            if (resp.accessToken) {
                toast.success("Logged in successfully!");
                sessionStorage.setItem("token", JSON.stringify(resp.accessToken));
                sessionStorage.setItem("email", authDetail.email);
                sessionStorage.setItem("userId", JSON.stringify(resp.user.id));
            } else {
                toast.error("Please Enter a valid credentials");
            }
            return resp;
        } catch (err) {
            throw new Error(`Error : ${err.message}`);
        }
    }
}

export async function register(authDetail){

    try{
        const registerResponse = await fetch(`${process.env.REACT_APP_HOST}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(authDetail)
        });

        if (registerResponse.ok) {
            const data = await registerResponse.json();
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("email", authDetail.email);
            sessionStorage.setItem("userId", JSON.stringify(data.user.id));
        }
        return registerResponse;             
    } catch (err) {
        throw new Error(`Error : ${err.message}`);
    }
}

export function logout(){
    sessionStorage.removeItem("email");
} 