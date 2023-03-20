import React, { useState, useEffect } from "react"
import styles from "./App.module.scss"
import { Context } from "./context"
import LinkList from "./components/LinkList/LinkList"
import Clock from "./components/Time/Clock"
import Search from "./components/Search/Search"
import Weather from "./components/Weather/Weather"
import ConfigsMenu from "./components/ConfigsMenu/ConfigsMenu"
import { CircularProgress } from "@mui/material"

function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <Context>
      {isLoading ? (
        <div className={styles.App}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.App}>
          <ConfigsMenu />
          <Clock />
          <Search />
          <LinkList />
          <Weather />
        </div>
      )}
    </Context>
  )
}

export default App
