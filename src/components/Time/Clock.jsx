import React, {useState, useEffect} from "react"
import styles from './Clock.module.scss'

const Clock = () => {
	const [date, setDate] = useState(new Date())
	const refreshClock = () => {
		setDate(new Date())
	}
	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000)
		return function cleanup() {
      clearInterval(timerId);
    }
	}, [])
	return (
		<div className={styles.Clock}>
			<div className={styles.Clock__time}>
				{date.toLocaleTimeString('ru-Ru')}
			</div>
			<div className={styles.Clock__date}>
				{date.toLocaleDateString('ru-Ru')}
			</div>
		</div>
	)
}

export default Clock