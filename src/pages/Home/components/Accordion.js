import { useState } from 'react';

export const Accordion = ({faq}) => {
    const { question, answer } = faq;
    const [ show, setShow ] = useState(false);

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button onClick={ () => setShow(!show) } type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
          <span>{question}</span>
          <svg data-accordion-icon className={`w-3 h-3 ${ !show ? `rotate-180` : "" }  shrink-0`} aria-hidden={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      { show && (
        <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
            </div>
        </div>
      )}
    </div>
  )
}
