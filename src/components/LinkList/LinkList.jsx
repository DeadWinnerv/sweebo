import React, { useContext, useState } from "react"
import { AppContext as Context } from "../../context"
import LinkItem from "./LinkItem/LinkItem"
import styles from "./LinkList.module.scss"
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp"
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp"

const LinkList = () => {
  const { linkItems, addLinkItem, removeLinkItem, userStyles } =
    useContext(Context)
  const [isAddingNewLink, setAddingNewLink] = useState(false)

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        addLinkItem(e.target)
      }
      setAddingNewLink(!isAddingNewLink)
    }
  }

  return (
    <div
      className={
        userStyles.view === "list" ? styles.link_list : styles.link_tiles
      }
    >
      {linkItems.map((item, index) => (
        <div
          className={
            userStyles.view === "list"
              ? styles.link_list__item
              : styles.link_tiles__item
          }
        >
          <LinkItem key={item.id} type={userStyles.view} {...item} />
          <RemoveCircleOutlineSharpIcon
            onClick={() => removeLinkItem(item.id)}
          />
        </div>
      ))}
      {isAddingNewLink ? (
        <input
          autoFocus
          className={
            userStyles.view === "list"
              ? styles.link_list__input
              : styles.link_tiles__input
          }
          type="text"
          onKeyDown={(e) => handleInputKeyDown(e)}
          onBlur={() => setAddingNewLink(!isAddingNewLink)}
        />
      ) : (
        <button
          className={
            userStyles.view === "list"
              ? styles.link_list__button
              : styles.link_tiles__button
          }
          onClick={() => setAddingNewLink(!isAddingNewLink)}
        >
          <AddBoxSharpIcon fontSize="medium" />
        </button>
      )}
    </div>
  )
}

export default LinkList
