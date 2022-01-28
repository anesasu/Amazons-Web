import React from "react"
import { Route, Routes } from "react-router-dom"

import MainNav from "./MainNav"
import Play    from "./Play"

class MainContainer extends React.Component {
    render() {
        return (
            <Routes>
                <Route exact path="/"     element={<MainNav />}></Route>
                <Route exact path="/play" element={<><MainNav /><Play /></>}></Route>
            </Routes>
        )
    }
}

export default MainContainer
