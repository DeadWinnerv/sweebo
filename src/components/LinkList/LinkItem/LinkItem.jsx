import styles from './LinkItem.module.scss'

const linkItem = (props) => {
	return (
		<a href={props.link} className={styles.link_item}>
			<img src={props.fav} alt="defimg" />
			<span>{props.title}</span>
		</a>
	)
}

export default linkItem