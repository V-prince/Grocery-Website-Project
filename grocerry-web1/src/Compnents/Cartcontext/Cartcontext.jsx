import { createContext, useState } from "react";

export const Cartscontext = createContext({
    carts: [],
    addInCart: () => { },
    DeleteCart: () => { }
});

const CartProvider = ({ children }) => {
    let [carts, setcarts] = useState([])

    function addInCart(product) {
        if (carts.some(item => item.id === product.id)) {
            return;
        }
        setcarts([...carts, product])
    }

    function DeleteCart(id) {
        let filtering = carts.filter(item => item.id != id)
        setcarts(filtering)
    }

    return (
        <Cartscontext.Provider value={{ carts, addInCart, DeleteCart }}>
            {children}
        </Cartscontext.Provider>
    )
}

export default CartProvider