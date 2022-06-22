import CartProd from "./CartProdCls.js";
import {doApi} from "./apiSer.js";

export const cart_ar = [
    {name:"Milk",price:5,amount:3, id_prod:"Milk"},
    {name:"Bread",price:5,amount:3, id_prod:"Bread"},
    {name:"Banana",price:5,amount:3, id_prod:"Banana"},
]

export const createCartProds = (_ar,_amount) => {
    let st = JSON.stringify(_ar)
    localStorage.setItem("Cart",st);
    document.querySelector("#id_cart").innerHTML = "";
    _ar.map(item => {
        let {name,price,amount,id_prod} = item;
        let cart = new CartProd("#id_cart",name,price,amount,id_prod);
        cart.render();
    })
}

export const removeProdFromCart = (_id) => {
    let temp_ar = cart_ar.filter(item => 
        (_id != item.id_prod)
     )
     //cart_ar = temp_ar
     // האפשרות היחידה שניתן לאפס מערך שהוא קבוע
    cart_ar.splice(0,cart_ar.length);
    // האפשרות היחידה להשוות מערך למערך אחר
    cart_ar.push(...temp_ar);
    createCartProds(cart_ar);
}

export const addProdFromCart = async(_id,_amount) => {
    if(Number(_amount)<=0){
       alert("you need to add 1 item or more");
       return;
    }
    let duplicate = cart_ar.filter(item=>(item.id_prod==_id))
    let myUrl = "http://fs1.co.il/bus/shop.php"
    let _ar = await doApi(myUrl);
    let temp_ar=_ar.filter(item => (JSON.parse(JSON.stringify(item.name))==_id))
    let temp = [];
     temp_ar.map(item =>{
        let temp1 = {name:item.name,price:Number(item.price),amount:Number(_amount),id_prod:_id}
        temp.push(temp1)
    })

    if(duplicate.length==1){        
        cart_ar.map(item =>{ 
            if(item.id_prod==temp[0].id_prod){
                item.amount+=temp[0].amount;      
            }
        })
      } 
      else {
        cart_ar.push(...temp);
        }
      createCartProds(cart_ar);
    
}