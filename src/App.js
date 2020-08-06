import React, { useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'
import { getNASAPictures } from './NasaAPI'

function App() {
	const [pictures, updatePictures] = React.useState(null)

	useEffect(() => {
		if (!pictures) {
			const startDate = new Date('2020-07-01T08:28:41.917Z')
			const endDate = new Date()
			getNASAPictures(startDate, endDate).then((res) => {
				const images = res.filter((image) => image.media_type === 'image')
				updatePictures(images)
				console.log(images)
			})
		}
	}, [pictures])

	return (
		<div className="App">
			{pictures &&
				pictures.map((picture) => (
					<ImageCard
						key={picture.date}
						title={picture.title}
						image={picture.hdurl}
						copyright={picture.copyright}
						date={picture.date}
					/>
				))}
		</div>
	)
}

export default App
