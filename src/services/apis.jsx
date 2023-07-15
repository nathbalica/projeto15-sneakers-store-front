// estava organizando as apis assim, acredito que ficam mais organizadas
// vou deixar abaixo os exemplos para usarmos

import axios from "axios"

function configToken(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/login`, body);

    return promise;
}

function signUp(body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body);

    return promise;
}

function logout(token){
    const config = configToken(token);
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, config)
    return promise;
}

function getSession(token) {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/session/${token}`);

    return promise;
}


function getTransaction(token) {
    const config = configToken(token)
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/transactions`, config)

    return promise;
}

function createTransaction(body, token) {
    const config = configToken(token)
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/transactions`, body, config)

    return promise;
}

function deleteTransaction(transactionId, token){
    const config = configToken(token)
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/transactions/${transactionId}`, config)

    return promise;
}

function updateTransaction(transactionId, token, body) {
    const config = configToken(token);
    const promise = axios.put(
      `${import.meta.env.VITE_API_URL}/transactions/${transactionId}`,
      body,
      config
    );
  
    return promise;
  }

function getOrder(token) {
    const config = configToken(token);
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/checkout`, config);

    return promise;
}

function finishOrder(token) {
    const config = configToken(token);
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/checkout`, config);

    return promise;
}

function cancelOrder(token){
    const config = configToken(token);
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/cancel-checkout`, config);

    return promise;
}

const apis = {
    login,
    signUp,
    logout,
    getSession,
    getTransaction,
    createTransaction,
    deleteTransaction,
    updateTransaction,
    getOrder,
    finishOrder,
    cancelOrder
}

export default apis;