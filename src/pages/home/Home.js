import React from "react";
import useAuth from "../../hooks/useAuth";

export default function Home() {
    const auth = useAuth();
    console.log(auth);
    return (
        <div>
            <h1>estamos en home</h1>
        </div>
    );
}
