import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services";
import { useTitle } from "../components";

export const Register = () => {
    const navigate = useNavigate();
    useTitle("Register");

    const IsValidate = (event) => {
        let isProceed = true;
        let errorMessage = "Please Enter Value in ";
        const { userName, email, password } = event.target;

        if (!userName.value){
            isProceed = false;
            errorMessage += "Username "
        }
        if (!email.value){
            isProceed = false;
            errorMessage += "Email "
        }
        if (!password.value){
            isProceed = false;
            errorMessage += "Password"
        }
        if (!isProceed){
            toast.warning(errorMessage);
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)){
            isProceed = false;
            toast.warning("Please Enter a valid email");
        }
        return isProceed;
    }


    async function handleRegister(event) {
        event.preventDefault();
        const authDetail = {
          name: event.target.userName.value,
          email: event.target.email.value,
          password: event.target.password.value
        };

        if (!IsValidate(event)) {
            return;
        }

        try{
            const data = await register(authDetail);
            if(data.status === 400){
                toast.warning("Email Already Exits");
                toast.success("Please Sign in to your account");
                navigate("/login");
            } else if(data.ok){
                toast.success("Registered successfully");
                navigate("/products");
            }
        } catch (err) {
            toast.error(`Something went wrong : ${err.message}`)
        }
                    
    }

  return (
    <main>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="name" name="userName" id="name" placeholder="Roman Reigns" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            
                            <button type="submit" className="border border-gray-500 dark:border-gray-100 w-full text-gray-500 dark:text-gray-200 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
