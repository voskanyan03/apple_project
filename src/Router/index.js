import React from "react"
import { Route } from "react-router-dom"
import { Routes }  from ("react-router-dom")


function RootRouter() {
    return<>
        <Routes>
            <Route path="*" element={<h1>home</h1>}/>
        </Routes>
    </>
    
}
export default RootRouter