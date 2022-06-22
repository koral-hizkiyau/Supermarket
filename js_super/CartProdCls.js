import { removeProdFromCart } from "./cartManager.js";

class CartProd{
    constructor(_parent,_name,_price,_amount,_prod_id){
        this.parent = _parent;
        this.name = _name;
        this.price = _price;
        this.amount = _amount;
        this.prod_id = _prod_id;
    }

    render(){
        
        let newDiv = document.createElement("div");
        newDiv.className = "border p-2";
        document.querySelector(this.parent).append(newDiv);

        let newBtn = document.createElement("button");
        newBtn.className = "btn btn-danger float-right";
        newBtn.innerHTML = "x";
        newDiv.append(newBtn);

        newBtn.addEventListener("click",() => {
            removeProdFromCart(this.prod_id)
            // alert("delete")
        })

        // מכיוון שאחרי שעשינו אפנד לאלמנט שאנחנו רוצים להאזין ללחיצה
        // עליו לא נוכל אם נעשה ישירות לאבא של הכפתור
        // איינר HTML
        // ולכן יצרנו דיב פנימי שהוא יכיל את המידע
        let insideDiv = document.createElement("div");
        newDiv.append(insideDiv)

        insideDiv.innerHTML += `
        <h3>${this.name}</h3>
        <div>Price:${this.price} nis, Amount:${this.amount}</div>
        `
       document.querySelector("#id_all_cart").addEventListener("click",()=>{
        removeProdFromCart(this.prod_id)
    })
      
    }
}

export default CartProd;