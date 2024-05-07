

const LocalStorage = (data) => {
    const id =data.id;

    let cart={}
    const getData= localStorage.getItem("Cart")
    if(getData){
        cart=JSON.parse(getData)
    }
    else{
        cart={}
    }

    const qunatity = cart[id]
    if(qunatity){
        cart[id]=qunatity+1;
    }
    else{
        cart[id]=1;
    }
    localStorage.setItem("Cart",JSON.stringify(cart))
};
    const getItem=()=>{
        let cart ={}
        const getData= localStorage.getItem("Cart")
        if(getData){
            cart=JSON.parse(getData)
        }
        else{
            cart={}
        }
        return cart;
    }

export {LocalStorage,getItem} ;