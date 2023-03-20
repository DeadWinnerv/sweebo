import React, { useState, useContext } from "react"
import styles from "./ConfigsMenu.module.scss"
import { AppContext as Context } from "../../context"
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp"
import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import ViewListSharpIcon from "@mui/icons-material/ViewListSharp"
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp"

const ConfigsMenu = () => {
  const [isVisible, setVisible] = useState(false)
  const [visibilityStyle, setVisibilityStyle] = useState({
    maxHeight: "0",
    minHeight: "0",
  })
  const [viewState, setViewState] = useState(
    JSON.parse(localStorage.getItem("userStyles"))
  )
  const [clockFormat, setClockFormat] = useState(
    JSON.parse(localStorage.getItem('userStyle'))
  )
  const handleSettingsTurnClick = () => {
    setVisible(!isVisible)
    isVisible
      ? setVisibilityStyle({})
      : setVisibilityStyle({
          maxHeight: "0",
          minHeight: "0",
        })
  }

  const { handleViewChange, handleClockFormatChange } = useContext(Context)

  return (
    <div className={styles.ConfigsMenu}>
      <div onClick={handleSettingsTurnClick}>
        <SettingsApplicationsSharpIcon />
      </div>
      <div className={styles.configs_menu} style={visibilityStyle}>
        <div className={styles.configs_menu__item}>
          <span className={styles.configs_menu__item__title}>
            Отображение ссылок
          </span>
          <ToggleButtonGroup
            exclusive
            value={viewState}
            onChange={(e) => {
              handleViewChange(e)
              setViewState(e.currentTarget.value)
            }}
          >
            <ToggleButton value="list" aria-label="list">
              <ViewListSharpIcon />
            </ToggleButton>
            <ToggleButton value="tiles" aria-label="tiles">
              <ViewModuleSharpIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className={styles.configs_menu__item}>
          <span className={styles.configs_menu__item__title}>
            Формат времени
          </span>
          <ToggleButtonGroup
          exclusive
          value={clockFormat}
          onChange={(e) => {
            handleClockFormatChange(e)
            setClockFormat(e.currentTarget.value)
          }}
          >
            <ToggleButton value={'ru-RU'}>
              24
            </ToggleButton>
            <ToggleButton value={'en-En'}>
              12
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default ConfigsMenu
