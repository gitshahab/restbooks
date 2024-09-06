import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
    const email = useRef();
    const password =useRef();
    const navigate = useNavigate();

    const validate = () => {
        let result = true;
        if (!email.current.value){
            result = false;
            toast.warning("Please Enter email");
        }
        if (!password.current.value){
            result = false;
            toast.warning("Please Enter Password");
        }
        return result;
    }

    async function handleLogin(event){
        event.preventDefault();

        const authDetail = {
            email: email.current.value,
            password: password.current.value
        }

        if(validate()){
            try {
                const response = await fetch(`http://localhost:8000/login`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(authDetail)
                });
                const resp = await response.json();
                if (resp.accessToken) {
                    toast.success("Logged in successfully!");
                    sessionStorage.setItem("token", JSON.stringify(resp.accessToken));
                    sessionStorage.setItem("email", email.current.value);
                    sessionStorage.setItem("userId", JSON.stringify(resp.user.id));
                    navigate("/products");
                } else {
                    toast.error("Please Enter a valid credentials");
                }
            } catch (err) {
                toast.error(`Login Failed ${err.message}`);
            }
        }   
    }
  return (
    <main>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input ref={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input ref={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" className="border border-gray-500 dark:border-gray-100 text-gray-500 dark:text-gray-200 w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
    </section>
  </main>
  )
}
