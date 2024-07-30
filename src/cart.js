import { useEffect, useState } from "react"
import "./img/cart.css"
const Addcart = ({ item, increase, decreass, remove }) => {
    const [price, setPrice] = useState(0);

    const totelPrice = () => {
        let ans = 0;
        item.map((item) => (ans += item.price * item.quanty))
        setPrice(ans)
    }
    useEffect((p) => { totelPrice() })
    return (
        <div className="carts">
            {item.map((item, index) => (
                <div key={item.id}>
                    <div className="cartitem" >
                        <div className="cartitem-1">
                            <div className="row">
                                {index + 1}
                            </div>
                            <div>
                                <img src={item.image} alt={item.title}></img>
                            </div>

                            <div className="cartItem" >{item.title}</div>

                            <div className="qnts">
                                <button className="increase" onClick={() => increase(item)}>+</button>
                                <span className="cartQts" >{item.quanty}</span>
                                <button className="decrease" onClick={() => decreass(item)}>-</button>
                            </div>

                            <div className="subtotal" >
                                {item.price * item.quanty}
                            </div>
                        </div>
                        <div className="remove">
                            <button onClick={() => remove(index)}><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>

                </div>
            ))}
            <div className="total">Total : $ {price}</div>
        </div>
    )
}
export { Addcart }