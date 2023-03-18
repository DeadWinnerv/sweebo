import React, {useContext} from 'react'
import styles from './Weather.module.scss'
import { CustomContext as Context } from '../../context'

const Weather = () => {

	const {weatherInfo} = useContext(Context)
	return (
			<div className={styles.Weather}>
				{(weatherInfo==='loading')
				?	<div className={styles.Weather__info}>
						<span>loading...</span>
					</div>
				: <div className={styles.Weather__info}>
						<span className={styles.Weather__info__temp}>{weatherInfo.temperature}°C</span>
						<span className={styles.Weather__info__wind}>{weatherInfo.windspeed} m/s</span>
					</div>
				}
			</div>
	)
}

export default Weather