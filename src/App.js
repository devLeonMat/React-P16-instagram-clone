import React, {useState} from "react";
import {ApolloProvider,} from '@apollo/client'
import client from "./config/apollo";
import {ToastContainer} from "react-toastify";


import Auth from "./pages/auth";


export default function App() {
    const [auth, setAuth] = useState(undefined);

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
