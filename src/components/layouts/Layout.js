import React from 'react'

import Navegation from "../Navegation";

export default function Layout({ children }) {
    return (
        <>
            <Navegation/>
            {children}
        </>
    )
}
