import LoadingImg from "../../assets/loading.svg";
import ErrorImg from "../../assets/network-error.svg";

export const LoadingNerror = ({loading, error}) => {
    
    if (loading) {
        return (
            <div className="flex flex-col items-center h-screen">
                <h3 className="text-2xl text-gray-900 dark:text-white my-5">Loading...</h3>
                <img className="h-40" src={LoadingImg} alt="Loading.." />
            </div>
        )
    }
    if (error) {
        return (
            <div className="flex flex-col items-center h-screen">
                <h3 className="text-2xl text-red-500 my-5">{error}</h3>
                <img src={ErrorImg} alt="error.." />
            </div>
        )
    }
}
