import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use RestBook?",
          "answer": "RestBook offers a vast collection of popular books, an easy-to-use interface, and a seamless reading experience."
        },
        {
          "id": 2,
          "question": "Can I access RestBook on mobile?",
          "answer": "Yes, RestBook is designed with a responsive layout, making it accessible on mobile devices through any browser."
        },
        {
          "id": 3,
          "question": "What payment methods are accepted?",
          "answer": "RestBook supports multiple payment methods including credit/debit cards, PayPal, and other secure payment gateways."
        },
        {
          "id": 4,
          "question": "Do I need an account to purchase books?",
          "answer": "Yes, creating an account is required to purchase and manage your eBooks."
        },
        {
          "id": 5,
          "question": "Is there a return policy for eBooks?",
          "answer": "RestBook offers a flexible return policy within a specified period. Please refer to our return policy page for more details."
        }
    ];
      
  return (
    <section className='my-10 p-7 border rounded dark:border-slate-700 shadow-sm'>
        <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8'>Question in Mind?</h1>
        {faqs.map((faq) => (
            <Accordion  key={faq.id} faq={faq}/>
        ))}
    </section>
  )
}
