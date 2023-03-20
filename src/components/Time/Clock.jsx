import React, {useState, useEffect, useContext} from "react"
import styles from './Clock.module.scss'
import { AppContext as Context } from "../../context"

const Clock = () => {
	const { userStyles } = useContext(Context)

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
				{date.toLocaleTimeString(userStyles.clockFormat)}
			</div>
			<div className={styles.Clock__date}>
				{date.toLocaleDateString('ru-RU')}
			</div>
		</div>
	)
}

export default Clock