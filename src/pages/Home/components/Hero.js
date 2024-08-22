import { Link } from 'react-router-dom';
import HeroImg from '../../../assets/Hero-img.webp';

export const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row dark:text-slate-100 items-center'>
        <div className='my-5 text-center lg:text-left lg:ml-10'> 
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white'>The ebook Store</h1>
            <p className='text-lg sm:text-xl lg:text-2xl my-5 px-5 lg:px-1 dark:text-slate-300 dark:text-white'>Most Popular Books Of All Genre With All Category.<br/>Find Ratings and Access to the Newest Books Digitally.</p>
            <Link to="/products" type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:focus:ring-blue-800'>Explore ebooks</Link>
        </div>
        <div className='my-5 w-full lg:w-1/2 flex justify-center lg:justify-end px-4'>
            <img className='rounded-lg max-w-xs mx-10' src={HeroImg} alt="restbooks Hero" />
        </div>
    </section>
  )
}
