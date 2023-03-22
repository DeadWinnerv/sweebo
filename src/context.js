import { createContext, useState, useEffect } from "react"

export const AppContext = createContext()

export const Context = (props) => {
  const [linkItem, setLinkItem] = useState("")
  const [linkItems, setLinkItems] = useState(
    JSON.parse(localStorage.getItem("linkItems")) || [
      {
        id: 1,
        title: "google.com",
        link: "https://google.com",
        fav: `https://api.faviconkit.com/google.com/128`,
      },
      {
        id: 2,
        title: "yandex.ru",
        link: "https://ya.ru",
        fav: `https://api.faviconkit.com/ya.ru/128`,
      },
      {
        id: 3,
        title: "vk.com",
        link: "https://vk.com",
        fav: `https://api.faviconkit.com/vk.com/128`,
      },
      {
        id: 4,
        title: "postman.com",
        link: "https://postman.com",
        fav: `https://api.faviconkit.com/postman.com/128`,
      },
    ]
  )

  useEffect(() => {
    localStorage.setItem("linkItems", JSON.stringify(linkItems))
  }, [linkItems])

  const addLinkItem = (item) => {
    if (item.trim !== "") {
      const newLinkItem = {
        id: Date.now(),
        title: item.value,
        link: `https://${item.value}`,
        fav: `https://api.faviconkit.com/${item.value}/128`,
      }
      setLinkItems([...linkItems, newLinkItem])
      setLinkItem("")
    } else {
      setLinkItem("")
    }
  }

  const removeLinkItem = (id) => {
    return setLinkItems(linkItems.filter((linkItem) => linkItem.id !== id))
  }

  const [userPosition, setUserPosition] = useState()
  const [weatherInfo, setWeatherInfo] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
  }, [])

  useEffect(() => {
    if (userPosition) {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${userPosition.latitude}&longitude=${userPosition.longitude}&current_weather=true&windspeed_unit=ms`
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json()
          } else {
            console.log("error occured")
          }
        })
        .then((data) => {
          setWeatherInfo(data.current_weather)
        })
        .catch((err) => console.log(err))
    }
  }, [userPosition])

  //search block
  const searchYandex = (text) => {
    if (text) {
      text.replace(" ", "+")
      window.location.replace(
        `https://yandex.ru/search/?text=${text}&lr=193&search_source=yaru_desktop_common`
      )
    } else {
      window.location.replace("https://ya.ru")
    }
  }

  //view configs block

  const [userStyles, setUserStyles] = useState(
    JSON.parse(localStorage.getItem("userStyles")) || {
      view: "list",
      clockFormat: "ru-Ru"
    }
  )
  const handleViewChange = (e) => {
    setUserStyles({ ...userStyles, view: e.currentTarget.value })
  }

  const handleClockFormatChange = (e) => {
    setUserStyles({ ...userStyles, clockFormat: e.currentTarget.value })
  }

  useEffect(() => {
    localStorage.setItem("userStyles", JSON.stringify(userStyles))
  }, [userStyles])

  const values = {
    linkItems,
    addLinkItem,
    removeLinkItem,
    weatherInfo: weatherInfo || "loading",
    userPosition,
    searchYandex,
    userStyles,
    handleViewChange,
    handleClockFormatChange,
  }

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  )
}
