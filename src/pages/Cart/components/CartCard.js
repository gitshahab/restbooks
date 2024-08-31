import DefaultCover from "../../../assets/default-cover.webp";
import { useCart } from "../../../context";

export const CartCard = ({ data, price, fullData}) => {
    const title = data?.title || "No title Available";
    const thumbnail = data?.imageLinks?.thumbnail || `${DefaultCover}`;
    const priceAmt = price?.listPrice?.amount || "Out Of Stock";

    const { removeCart } = useCart();

  return (
    <section>
        <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
            <div className="flex">
                <img className="w-32 rounded" src={thumbnail} alt="Basics To Advanced In React" />
                <div className="">
                    <p className="text-lg ml-2 dark:text-slate-200">{title}</p>
                    
                    <button onClick={() => removeCart(fullData)} className="text-base ml-2 text-red-400">Remove</button>
                </div>
            </div>
            <div className="text-lg m-2 dark:text-slate-200">
                <span className={`bi ${priceAmt === "Out Of Stock" ? `bi-cart-x` : `bi-currency-rupee`}`}>{priceAmt}</span>
            </div>
        </div>
    </section>
  )
}
