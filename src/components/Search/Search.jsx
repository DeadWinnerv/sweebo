import React, { useState, useContext } from "react"
import styles from "./Search.module.scss"
import SearchSharpIcon from "@mui/icons-material/SearchSharp"
import { AppContext as Context } from "../../context"

const Search = () => {
  const { searchYandex } = useContext(Context)
  const [searchValue, setSearchValue] = useState("")

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchYandex(searchValue)
    }
  }

  return (
    <div className={styles.Search}>
      <input
        type="text"
        placeholder="search"
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchSharpIcon onClick={(searchValue) => searchYandex(searchValue)} />
    </div>
  )
}

export default Search
