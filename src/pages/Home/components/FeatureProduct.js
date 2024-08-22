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
                <h3 className="text-2xl text-gray-900 dark:text-white my-5">Loading...</h3>
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
        <h1 className='text-2xl text-center font-semibold dark-slate-100 mb-5 underline underline-offset-8'>Featured eBooks</h1>
        <div className='flex flex-wrap lg:flex-row justify-center gap-2'>
            <ProductCard bookId={atomicHabitsData[0]?.id} data={atomicHabitsData[0]?.volumeInfo} price={atomicHabitsData[0]?.saleInfo}/>
            <ProductCard bookId={beingMortalData[0]?.id} data={beingMortalData[0]?.volumeInfo} price={beingMortalData[0]?.saleInfo}/>
            <ProductCard bookId={theSilentPatient[0]?.id} data={theSilentPatient[0]?.volumeInfo} price={theSilentPatient[0]?.saleInfo}/>
            <ProductCard bookId={theChoiceData[0]?.id} data={theChoiceData[0]?.volumeInfo} price={theChoiceData[0]?.saleInfo}/>
        </div>
    </section>
  )
}
