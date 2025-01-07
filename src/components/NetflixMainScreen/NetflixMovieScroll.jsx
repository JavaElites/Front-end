import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const NetflixMovieScroll = ({ title, movies = [] }) => {

  const [selectedMovie, setSelectedMovie] = useState(null);
    const navigate = useNavigate();


  const handleThumbnailClick = (movieId) => {
    // Navigate to the movie detail page based on movie ID
    navigate(`/movie/${movieId}`);
  };


  const handleClosePlayer = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={containerStyle}>

      {title && <h2 style={titleStyle}>{title}</h2>}
      {selectedMovie ? ( <div onClick={() => handleThumbnailClick(selectedMovie.id)}> {/* You can add movie details here */}
                                 </div>

      ) : (
        <div style={scrollableStyle}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={movie.thumbnail}
              alt={movie.title}
              style={thumbnailStyle}
              onClick={() => handleThumbnailClick(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Styles remain the same as before
const containerStyle = {
  width: '100%',
  height: '220px',
  position: 'relative',
  backgroundColor: '#000',
  overflowY: 'hidden',
};

const scrollableStyle = {
  display: 'flex',
  overflowX: 'auto',
  gap: '10px',
  padding: '10px',
  height: '100%',
  alignItems: 'center',
  scrollbarWidth: 'none',
};

const thumbnailStyle = {
  width: '220px',
  height: '121px',
  cursor: 'pointer',
  borderRadius: '5px',
  objectFit: 'cover',
};

const movieDetailStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#000',
};

const videoSectionStyle = {
  flex: 2,
  marginRight: '20px',
};

const videoStyle = {
  width: '100%',
  borderRadius: '10px',
};

const detailsStyle = {
  color: '#fff',
  marginTop: '20px',
};

const movieTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
};

const movieStatsStyle = {
  fontSize: '1rem',
  color: '#ff0000',
  margin: '10px 0',
};

const movieMetaStyle = {
  fontSize: '1rem',
  color: '#fff',
};

const movieCastStyle = {
  fontSize: '1rem',
  color: '#fff',
  margin: '10px 0',
};

const movieDescriptionStyle = {
  fontSize: '1rem',
  color: '#ccc',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px',
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default NetflixMovieScroll;
