export  function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const userId = JSON.parse(sessionStorage.getItem("userId"));
    const email = sessionStorage.getItem("email");
    return { token, userId, email };
}

export async function getUser(){
    const sessionData = getSession();
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${sessionData.userId}`, {
        method: "GET",
        headers: { "Content-type": "application/json", Authorization: `Bearer ${sessionData.token}`}
        });
        if (response.ok){
            const data = await response.json();
            return data;
        }    
    } catch (err) {
        throw new Error(`Error : ${err.message}`);
    }
    

}

export async function getUserOrders(){
    try{
        const sessionData = getSession();

        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${sessionData.userId}`, {
            method: "GET",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${sessionData.token}`}
        });
        if (response.status === 401) {
            return { status: 401 };
        }
        if (!response.ok) {
            return { status : response.status }
        }
        if (response.ok){
            const data = await response.json();
            return {data};
        }
        
    } catch(err) {
        return { status: err.message }
    }

}

export async function createOrder(cartList, total, user){
    const sessionData = getSession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user : {
            name: user.name,
            email: user.email,
            id: user.id
        }        
    }
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
            method: "POST",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${sessionData.token}`},
            body: JSON.stringify(order)
        });

        if (response.ok){
            const data = await response.json();
            return  data ;
        }
        
    } catch (err) {
        throw new Error(`Error : ${err.message}`);
    }

}