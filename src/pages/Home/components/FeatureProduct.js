import { ProductCard, useFetch} from '../../../components/index';
import LoadingImg from "../../../assets/loading.svg";
import ErrorImg from "../../../assets/network-error.svg";

export const FeatureProduct = () => {

    const { data: atomicHabitsData, loading: loadingAtomicHabits, error: errorAtomicHabits } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=fFCjDQAAQBAJ&orderBy=relevance&maxResults=1`);
    const { data: beingMortalData, loading: loadingBeingMortal, error: errorBeingMortal } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=ZerotoOne&orderBy=relevance&maxResults=1`);
    const { data: theSilentPatient, loading: loadingtheSilentPatient, error: errortheSilentPatient } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=TheWomanintheWindow&orderBy=relevance&maxResults=1`);
    const { data: theChoiceData, loading: loadingTheChoice, error: errorTheChoice } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=wild&orderBy=relevance&maxResults=1`);

    if (loadingAtomicHabits || loadingBeingMortal || loadingTheChoice || loadingtheSilentPatient) {
        return (
            <div className="flex flex-col items-center h-screen">
                <h3 className="text-2xl text-grey-900 dark:text-gray-100 my-5">Loading...</h3>
                <img className="h-40" src={LoadingImg} alt="Loading.." />
            </div>
        )
    }
    if (errorAtomicHabits || errorBeingMortal || errorTheChoice || errortheSilentPatient) {
        return (
            <div className="flex flex-col items-center h-screen">
                <h3 className="text-2xl text-red-500 my-5">Something went wrong. Please try again later.</h3>
                <img src={ErrorImg} alt="error.." />
            </div>
        )
    }

  return (
    <section className='my-20'>
        <h1 className='text-2xl text-center font-semibold dark:text-gray-100 mb-5 underline underline-offset-8'>Featured eBooks</h1>
        <div className='flex flex-wrap lg:flex-row justify-center gap-2'>
            <ProductCard data={atomicHabitsData[0]?.volumeInfo} price={atomicHabitsData[0]?.saleInfo} fullData={atomicHabitsData[0]} />
            <ProductCard data={beingMortalData[0]?.volumeInfo} price={beingMortalData[0]?.saleInfo} fullData={beingMortalData[0]} />
            <ProductCard data={theSilentPatient[0]?.volumeInfo} price={theSilentPatient[0]?.saleInfo} fullData={theSilentPatient[0]} />
            <ProductCard data={theChoiceData[0]?.volumeInfo} price={theChoiceData[0]?.saleInfo} fullData={theChoiceData[0]} />
        </div>
    </section>
  )
}
