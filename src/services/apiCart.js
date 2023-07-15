import axios from "axios";

function addProductIntoCart(userId, item) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cart`, {userId, item});
    return promise;
}

const apiCart = { addProductIntoCart };
export default apiCart;