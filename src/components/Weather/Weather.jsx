import React, {useContext} from 'react'
import styles from './Weather.module.scss'
import { AppContext as Context } from '../../context'
import { CircularProgress } from '@mui/material'

const Weather = () => {

	const {weatherInfo} = useContext(Context)
	return (
			<div className={styles.Weather}>
				{(weatherInfo==='loading')
				?	<div className={styles.Weather__info}>
						<CircularProgress />
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