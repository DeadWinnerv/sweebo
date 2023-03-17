import React, {useContext, useState} from "react"
import { CustomContext as Context } from "../../context"
import LinkItem from "./LinkItem/LinkItem"
import styles from './LinkList.module.scss'
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';

const LinkList = () => {
	const {linkItems, addLinkItem, removeLinkItem} = useContext(Context)
	const [isAddingNewLink, setAddingNewLink] = useState(false)

	const handleInputKeyDown = (e) => {
		if (e.key === 'Enter') {
			if (e.target.value) {
				addLinkItem(e.target)
			}
			setAddingNewLink(!isAddingNewLink)
		}
	}

	return (
		<div className={styles.link_list}>
			{linkItems.map((item, index) => (
				<div className={styles.link_list__item}>
					<LinkItem key={item.id} {...item}/>
					<RemoveCircleOutlineSharpIcon onClick={() => removeLinkItem(item.id)} />
				</div>
			))}
			{isAddingNewLink
			? <input autoFocus className={styles.link_list__add_item_input} type="text"
			onKeyDown={handleInputKeyDown}
			onBlur={() => setAddingNewLink(!isAddingNewLink)}/>
			: <button 
			className={styles.link_list__add_item_button}
			onClick={() => setAddingNewLink(!isAddingNewLink)}>
				<AddBoxSharpIcon fontSize='medium'/>
			</button>}
		</div>
	)
}

export default LinkList