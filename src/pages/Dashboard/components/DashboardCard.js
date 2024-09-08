

export const DashboardCard = ({order}) => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
        <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
            <span>Order Id: {order.id}</span>
            <span>Total: <i className="bi bi-currency-rupee"></i>{order.amount_paid}</span>
        </div>
        {order.cartList.map((product) => (
            <div key={product.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
                <div className="flex">
                    <img className="w-32 rounded" src={product.volumeInfo.imageLinks.thumbnail} alt={product.volumeInfo.title} />
                    <div className="">
                        <a href="/products/10002">
                            <p className="text-lg ml-2 dark:text-slate-200">{product.volumeInfo.title}</p>
                        </a>
                        <div className="text-lg m-2 dark:text-slate-200">
                            <span><i className="bi bi-currency-rupee"></i>{product.saleInfo.listPrice.amount}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}

    </div>
  )
}
