import React from "react"
import { Route, Routes } from "react-router-dom"

import MainNav from "./MainNav"

class MainContainer extends React.Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<MainNav />}></Route>
            </Routes>
        )
    }
}

export default MainContainer
