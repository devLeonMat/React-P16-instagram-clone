import React, {useState, useEffect} from "react";
import {ApolloProvider,} from '@apollo/client'
import client from "./config/apollo";
import {ToastContainer} from "react-toastify";
import Auth from "./pages/auth";
import {getToken} from "./utils/token";


export default function App() {
    const [auth, setAuth] = useState(undefined);
    useEffect(() => {
        const token = getToken();
        if (!token) {
            setAuth(null);
        } else {
            setAuth(token);
        }
    })

    return (
        <ApolloProvider client={client}>
            {!auth ? <Auth/> : <h1>Estas logueado</h1>}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </ApolloProvider>
    );
}
