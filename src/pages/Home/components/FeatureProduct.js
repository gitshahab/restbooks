import { LoadingNerror, ProductCard, useFetch} from '../../../components/index';

export const FeatureProduct = () => {

    const { data: atomicHabitsData, loading: loadingAtomicHabits, error: errorAtomicHabits } = useFetch(`${process.env.REACT_APP_API}?q=atomichabitsenglish&orderBy=relevance&maxResults=1`);
    const { data: beingMortalData, loading: loadingBeingMortal, error: errorBeingMortal } = useFetch(`${process.env.REACT_APP_API}?q=ZerotoOne&orderBy=relevance&maxResults=1`);
    const { data: theSilentPatient, loading: loadingtheSilentPatient, error: errortheSilentPatient } = useFetch(`${process.env.REACT_APP_API}?q=TheWomanintheWindow&orderBy=relevance&maxResults=1`);
    const { data: theChoiceData, loading: loadingTheChoice, error: errorTheChoice } = useFetch(`${process.env.REACT_APP_API}?q=Sapiens&orderBy=relevance&maxResults=1`);

    const loading = (loadingAtomicHabits || loadingBeingMortal || loadingTheChoice || loadingtheSilentPatient);
    const error =  (errorAtomicHabits || errorBeingMortal || errorTheChoice || errortheSilentPatient);

  return (
    <section className='my-20'>
        <h1 className='text-2xl text-center font-semibold dark:text-gray-100 mb-5 underline underline-offset-8'>Featured eBooks</h1>
        <LoadingNerror loading={loading} error={error} />
        <div className='flex flex-wrap lg:flex-row justify-center gap-2'>
            <ProductCard data={atomicHabitsData[0]?.volumeInfo} price={atomicHabitsData[0]?.saleInfo} fullData={atomicHabitsData[0]} />
            <ProductCard data={beingMortalData[0]?.volumeInfo} price={beingMortalData[0]?.saleInfo} fullData={beingMortalData[0]} />
            <ProductCard data={theSilentPatient[0]?.volumeInfo} price={theSilentPatient[0]?.saleInfo} fullData={theSilentPatient[0]} />
            <ProductCard data={theChoiceData[0]?.volumeInfo} price={theChoiceData[0]?.saleInfo} fullData={theChoiceData[0]} />
        </div>
    </section>
  )
}
