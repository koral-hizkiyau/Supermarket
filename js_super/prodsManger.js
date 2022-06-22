import Prod from "./ProdCls.js";

export const prods_ar = []

export const createProds = (_ar) => {
    prods_ar.push(..._ar)
    _ar.map(item => {
        item.id = item.name;
        let {cat,name,price,image,id} = item;
        let prod = new Prod("#id_row",name,image,cat,price,id);
        prod.render()

    })

    
}

