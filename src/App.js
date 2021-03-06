import React, { useEffect, useCallback, useState } from 'react';
import ImageCard from './components/ImageCard';
import Header from './components/Header';
import Loading from './components/Loading';
import { getNASAPictures } from './NasaAPI';
import moment from 'moment';
import './App.css';

function App() {
  const [pictures, updatePictures] = useState(null);
  const [filteredPics, setFilteredPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState('newest');

  // Reusable sort function with filtered pictures as default
  const sortPictures = useCallback(
    (sortPreference, imagesToSort = filteredPics) => {
      if (sortPreference === 'oldest') {
        const sortedPics = [...imagesToSort].sort((a, b) => moment(a.date).diff(b.date));
        return sortedPics;
      } else if (sortPreference === 'newest') {
        const sortedPics = [...imagesToSort].sort((a, b) => moment(b.date).diff(a.date));
        return sortedPics;
      }
    },
    [filteredPics],
  );

  useEffect(() => {
    if (!pictures) {
      const startDate = new Date('2020-07-01T08:28:41.917Z');
      const endDate = new Date();
      getNASAPictures(startDate, endDate).then((res) => {
        const images = res.filter((image) => image.media_type === 'image');
        // By default, sort by newest image
        const sortedImages = sortPictures(sortOption, images);
        updatePictures(sortedImages);
        setFilteredPics(sortedImages);
      });
    }
  }, [pictures, sortPictures, filteredPics, sortOption]);

  // To filter and re-sort images when time frame is changed
  const handleDateChange = (value) => {
    setLoading(true);
    if (value === '1 months') {
      const sortedDateRange = sortPictures(sortOption, pictures);
      setFilteredPics(sortedDateRange);
    } else {
      const splitValue = value.split(' ');
      const qty = parseInt(splitValue[0]);
      const type = splitValue[1];
      const today = new Date();
      const startDate = moment(today).subtract(qty, type);
      const dateRangePics = pictures.filter((pic) => {
        return moment(pic.date).isSameOrAfter(startDate, 'day');
      });
      const sortedDateRange = sortPictures(sortOption, dateRangePics);
      setFilteredPics(sortedDateRange);
    }
    // To give user some feedback (if sorted by newest date, they may not see the filter take place)
    setTimeout(() => setLoading(false), 300);
  };

  // For handling a sort on the already filtered pictures
  const handleSortChange = (sortPreference) => {
    setSortOption(sortPreference);
    const updatedPictures = sortPictures(sortPreference);
    setFilteredPics(updatedPictures);
  };

  return (
    <div>
      <Header handleDateChange={handleDateChange} handleSortChange={handleSortChange} />
      {filteredPics.length === 0 || loading ? (
        <Loading />
      ) : (
        <div className="container">
          {filteredPics &&
            filteredPics.map((picture, i) => (
              <ImageCard key={i} title={picture.title} image={picture.url} copyright={picture.copyright} date={picture.date} />
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
