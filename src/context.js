import { createContext, useState } from "react";

export const CustomContext = createContext()

export const Context = (props) => {
	const [linkItems, setLinkItems] = useState([
		{id: 1, title: 'google.com', link: 'https://google.com', fav: `https://api.faviconkit.com/google.com/128`, },
		{id: 2, title: 'yandex.ru', link: 'https://ya.ru', fav: `https://api.faviconkit.com/ya.ru/128`},
		{id: 3, title: 'vk.com', link: 'https://vk.com', fav: `https://api.faviconkit.com/vk.com/128`},
		{id: 4, title: 'postman.com', link: 'https://postman.com', fav: `https://api.faviconkit.com/postman.com/128`},
		// {id: 5, title: 'postman.com', link: 'https://postman.com', fav: `https://api.faviconkit.com/localhost:3000.com/128`},
		// {id: 6, title: 'google.com', link: 'https://google.com', fav: `https://api.faviconkit.com/google.com/128`, },
		// {id: 7, title: 'yandex.ru', link: 'https://ya.ru', fav: `https://api.faviconkit.com/ya.ru/128`},
		// {id: 8, title: 'vk.com', link: 'https://vk.com', fav: `https://api.faviconkit.com/vk.com/128`},
		// {id: 9, title: 'postman.com', link: 'https://postman.com', fav: `https://api.faviconkit.com/postman.com/128`},
		// {id: 10, title: 'postman.com', link: 'https://postman.com', fav: `https://api.faviconkit.com/localhost:3000.com/128`},
		// {id: 11, title: 'google.com', link: 'https://google.com', fav: `https://api.faviconkit.com/google.com/128`, },
		// {id: 12, title: 'yandex.ru', link: 'https://ya.ru', fav: `https://api.faviconkit.com/ya.ru/128`},
		// {id: 13, title: 'vk.com', link: 'https://vk.com', fav: `https://api.faviconkit.com/vk.com/128`},
		// {id: 14, title: 'postman.com', link: 'https://postman.com', fav: `https://api.faviconkit.com/postman.com/128`},
		// {id: 15, title: 'postman.com', link: 'https://postman.com', fav: `https://api.faviconkit.com/localhost:3000.com/128`},
	])

	const addLinkItem = (item) => {
		setLinkItems(linkItems => [...linkItems, {
			id: Date.now(),
			title: item.value,
			link: `https://${item.value}`,
			fav: `https://api.faviconkit.com/${item.value}/128`
		}])
	}

	const removeLinkItem = (id) => {
		console.log(id);
		return (
			setLinkItems(linkItems.filter(linkItem => linkItem.id !== id))
		)
	}

	
	const values = {
		linkItems,
		addLinkItem,
		removeLinkItem
	}

	return <CustomContext.Provider value={values}>
		{props.children}
	</CustomContext.Provider>
}