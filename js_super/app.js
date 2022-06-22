import { doApi } from "./apiSer.js"
import { createCartProds, cart_ar } from "./cartManager.js"
import { createProds } from "./prodsManger.js";

window.onload = () => {
    init()
}

const init = async() => {
    let myUrl = "http://fs1.co.il/bus/shop.php"
    let data = await doApi(myUrl)
    createProds(data);
    createCartProds(cart_ar);
}