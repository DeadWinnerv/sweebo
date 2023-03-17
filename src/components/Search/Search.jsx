import styles from './Search.module.scss'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Search = () => {
	return (
		<div className={styles.Search}>
			<input type="text" placeholder='search' />
			<SearchSharpIcon />
		</div>
	)
}

export default Search