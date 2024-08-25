import React from 'react'

export const Testimonial = () => {

    const reviews = [
            {
                "name": "Bassam Ullah",
                "review": "Restbooks is a game-changer for book lovers. The sleek design, combined with the ease of finding and categorizing books, makes it a must-have for anyone who loves reading. The search feature is quick, and the recommendations are spot on!"
            },
            {
                "name": "Farzan Khan",
                "review": "I've tried many ebook platforms, but Restbooks stands out for its user-friendly interface and comprehensive book database. Whether you're into fiction, non-fiction, or educational books, Restbooks has it all. Highly recommended!"
            },
            {
                "name": "Sumit Yadav",
                "review": "The Restbooks app has completely transformed how I read and discover new books. The smooth integration with Google Books and the ability to browse by genre is fantastic. It's a powerful tool for any book enthusiast."
            },
            {
                "name": "Manish",
                "review": "Restbooks is the perfect blend of functionality and aesthetics. The app is easy to navigate, and the dark mode is a great touch for late-night reading. Finding the perfect book has never been easier!"
            },
            {
                "name": "Devanshu Gupta",
                "review": "I love how Restbooks brings all my favorite books together in one place. The ratings and reviews are a helpful guide, and the personalized recommendations keep me hooked. This app is a must for every reader out there!"
            }
        ]

      

  return (
    <section className='my-20'>
        <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8'>User`s About Restbooks</h1>
        <div className='grid mb-8 rounded-lg border border-grey-200 shadow-sm dark:border-grey-700 md:mb-12 md:grid-col-2'>
            {reviews.map((review, index) => (
             <figure key={index} className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">{review.review}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">{review.name}</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Developer at Wipro</cite>
                    </div>
                </figcaption>
            </figure>))}
        </div>
    </section>
  )
}
