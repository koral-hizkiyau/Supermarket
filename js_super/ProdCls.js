import {addProdFromCart} from "./cartManager.js"

class Prod{
    constructor(_parent,_name,_image,_cat,_price,_id){
        this.parent = _parent;
        this.name = _name;
        this.image = _image;
        this.cat = _cat;
        this.price = _price;
        this.id = _id;
        this.amount = 0;
    }

    render(){
        let newDiv = document.createElement("div");
        newDiv.className = "col-lg-6 border";
        document.querySelector(this.parent).append(newDiv);

        newDiv.innerHTML += `
        <img src="${this.image}" alt="${this.name}" class="float-right ml-2 w-25">
        <h2>${this.name}</h2>
        <div>Price: ${this.price} nis</div>
        `

        let insideDiv = document.createElement('div');
        insideDiv.innerHTML += "Amount:"

        newDiv.append(insideDiv);

        let input = document.createElement("input");
        input.type = "number";
        input.value = this.amount;
        insideDiv.append(input);

        let addBtn = document.createElement("button");
        addBtn.className = "btn btn-primary mt-2";
        addBtn.innerHTML = "add Cart";
        newDiv.append(addBtn);

        addBtn.addEventListener("click",()=>{
            addProdFromCart(this.id,input.value);
            
        })

        
    }
}

export default Prod;