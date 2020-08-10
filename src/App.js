import React, { useEffect } from 'react';
import ImageCard from './components/ImageCard';
import Header from './components/Header';
import Loading from './components/Loading';
import { getNASAPictures } from './NasaAPI';
import './App.css';

function App() {
  const [pictures, updatePictures] = React.useState(null);

  useEffect(() => {
    if (!pictures) {
      const startDate = new Date('2020-07-01T08:28:41.917Z');
      const endDate = new Date();
      getNASAPictures(startDate, endDate).then((res) => {
        const images = res.filter((image) => image.media_type === 'image');
        updatePictures(images);
      });
    }
  }, [pictures]);

  const handleDateChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Header handleDateChange={handleDateChange} />
      {!pictures ? (
        <Loading />
      ) : (
        <div className="container">
          {pictures &&
            pictures.map((picture) => (
              <ImageCard
                key={picture.date}
                title={picture.title}
                image={picture.url}
                copyright={picture.copyright}
                date={picture.date}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
