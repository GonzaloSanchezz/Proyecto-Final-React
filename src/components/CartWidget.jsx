import React from "react";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
                <img src={"https://th.bing.com/th/id/OIP.Aq18plvJAlCxRqJf6zInMAHaHa?pid=ImgDet&rs=1" } alt={"carrito de compras"} width={20}  />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </div>

    )
}

export default CartWidget;