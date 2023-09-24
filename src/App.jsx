import React, { useState, useEffect, useCallback } from "react"
import Footer from "./components/Footer/Footer"
import LoadingState from "./util/LoadingState/LoadingState"
const Body = React.lazy(() => import("./components/Body/Body"))
const Header = React.lazy(() => import("./components/Header/Header"))
const Nav = React.lazy(() => import("./components/Navigation/Nav"))

function App() {
 
  return (
    <React.Suspense fallback={<LoadingState />}>
      <div>
      <Nav />
      <main>
      <Header />
      <Body 

      />
      <Footer />
      </main>
      </div>
    </React.Suspense>
  )
}

export default App